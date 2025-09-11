// server.js (ESM)
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
app.use(express.json());


const DEFAULT_ALLOWED = new Set([
  "https://www.gonow.dk",
  "https://gonow.dk",
]);


const extraOrigins = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map(s => s.trim())
  .filter(Boolean);
for (const o of extraOrigins) DEFAULT_ALLOWED.add(o);

app.use(
  cors({
    origin: (origin, cb) => {
    
      if (!origin || DEFAULT_ALLOWED.has(origin)) return cb(null, true);
      return cb(new Error("Not allowed by CORS: " + origin));
    },
    credentials: true,
  })
);

// -----------------------------
// Health-check
// -----------------------------
app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

// -----------------------------
// SMTP transporter (587 -> 465 fallback)
// -----------------------------
let transporter;

const mkTx587 = () =>
  nodemailer.createTransport({
    host: (process.env.SMTP_HOST || "").trim(), // fx smtp.simply.com
    port: 587,
    secure: false, // STARTTLS
    requireTLS: true,
    authMethod: "LOGIN",
    auth: {
      user: (process.env.SMTP_USER || "").trim(),
      pass: (process.env.SMTP_PASS || "").trim(),
    },
    logger: false, // slå fra i produktion hvis du vil
    debug: false,  // slå fra i produktion hvis du vil
  });

const mkTx465 = () =>
  nodemailer.createTransport({
    host: (process.env.SMTP_HOST || "").trim(),
    port: 465,
    secure: true, // SSL/TLS
    authMethod: "LOGIN",
    auth: {
      user: (process.env.SMTP_USER || "").trim(),
      pass: (process.env.SMTP_PASS || "").trim(),
    },
    logger: false,
    debug: false,
  });

async function initTx() {
  // Trim og valider envs tidligt (Windows kan gemme whitespace)
  const required = {
    SMTP_HOST: (process.env.SMTP_HOST || "").trim(),
    SMTP_USER: (process.env.SMTP_USER || "").trim(),
    SMTP_PASS: (process.env.SMTP_PASS || "").trim(),
    FROM_EMAIL: (process.env.FROM_EMAIL || "").trim(),
  };
  for (const [k, v] of Object.entries(required)) {
    if (!v) {
      console.error(`⛔ Manglende env: ${k}`);
    }
  }

  try {
    console.log("🔎 Verify 587/STARTTLS …");
    transporter = mkTx587();
    await transporter.verify();
    console.log("✅ 587 OK");
  } catch (e1) {
    console.error("❌ 587 verify:", e1?.message || e1);
    console.log("🔁 Prøver 465/SSL …");
    try {
      transporter = mkTx465();
      await transporter.verify();
      console.log("✅ 465 OK");
    } catch (e2) {
      console.error("❌ 465 verify:", e2?.message || e2);
      console.error("⛔ Begge fejlede – meget sandsynligt forkert login eller blokeret ekstern SMTP.");
    }
  }
}

// Node v20+ ESM understøtter top-level await
await initTx();

// -----------------------------
// Testmail (udeluk frontend-fejl)
// -----------------------------
app.get("/api/testmail", async (_req, res) => {
  try {
    if (!transporter) throw new Error("Ingen SMTP-transporter er klar");
    await transporter.sendMail({
      from: `"${(process.env.FROM_NAME || "NOW Website").trim()}" <${(process.env.FROM_EMAIL || "").trim()}>`,
      to: (process.env.INFO_TO || "").trim(),
      subject: "SMTP TEST",
      text: "Test fra Nodemailer.",
    });
    res.json({ ok: true, msg: "Mail sendt!" });
  } catch (e) {
    console.error("❌ Testmail fejl:", e);
    res.status(500).json({ ok: false, error: e?.message || "Fejl" });
  }
});

// -----------------------------
// Kontakt endpoint (bruges af React-formen)
// -----------------------------

const contactLimiter = rateLimit({
  windowMs: 60 * 1000, 
  max: 10,             
});
app.use("/api/contact", contactLimiter);

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ ok: false, error: "Manglende felter." });
    }
    if (!transporter) {
      return res.status(503).json({ ok: false, error: "SMTP ikke initialiseret." });
    }

    const mail = {
      from: `"${(process.env.FROM_NAME || "NOW Website").trim()}" <${(process.env.FROM_EMAIL || "").trim()}>`,
      to: (process.env.INFO_TO || "").trim(),
      subject: `Kontakt: ${subject}`,
      replyTo: email, // så I kan svare direkte
      text:
        `Ny besked fra kontaktformularen:\n\n` +
        `Navn: ${name}\nEmail: ${email}\n\n` +
        `Emne: ${subject}\n\n` +
        `Besked:\n${message}\n`,
      html: `
        <h3>Ny besked fra kontaktformularen</h3>
        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Emne:</strong> ${subject}</p>
        <p><strong>Besked:</strong><br/>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    };

    await transporter.sendMail(mail);
    return res.json({ ok: true });
  } catch (e) {
    console.error("❌ SendMail fejl:", e);
    return res.status(500).json({ ok: false, error: "Kunne ikke sende beskeden." });
  }
});

// -----------------------------
// Start server
// -----------------------------
const PORT = Number((process.env.PORT || "3001").trim());
app.listen(PORT, () => console.log(`🚀 Server kører på port ${PORT}`));
