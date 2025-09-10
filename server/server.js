/**
 * Minimal SMTP contact form backend
 * Run: npm i express nodemailer express-rate-limit cors dotenv
 * Then: node server.js
 */
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// If frontend is on another origin, set up CORS (adjust origin as needed)
app.use(cors({ origin: process.env.CORS_ORIGIN || true }));
app.use(express.json());

// Basic rate limiting
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
});
app.use("/api/", limiter);

// SMTP transporter (use your provider's SMTP credentials)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587/STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Simple health check
app.get("/api/health", async (_req, res) => {
  try {
    await transporter.verify();
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e) });
  }
});

// Contact endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message, company } = req.body || {};

  // Honeypot field: if filled, likely a bot
  if (company) return res.status(200).json({ ok: true });

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: "Udfyld venligst alle felter." });
  }

  try {
    const to = process.env.INFO_TO || "info@gonow.dk";
    const fromEmail = process.env.FROM_EMAIL || "no-reply@gonow.dk";
    const fromName = process.env.FROM_NAME || "NOW Website";

    await transporter.sendMail({
      to,
      from: { address: fromEmail, name: fromName },
      replyTo: email,
      subject: `[Kontaktformular] ${subject}`,
      text: `Navn: ${name}\nE-mail: ${email}\n\n${message}`,
      html: `<p><strong>Navn:</strong> ${name}</p>
             <p><strong>E-mail:</strong> ${email}</p>
             <p><strong>Besked:</strong></p>
             <p>${String(message).replace(/\n/g, "<br/>")}</p>`,
    });

    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: "Kunne ikke sende e-mail. Tjek SMTP-indstillinger." });
  }
});

app.listen(PORT, () => {
  console.log(`Contact form server running on port ${PORT}`);
});
