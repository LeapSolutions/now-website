import React, { useState, useEffect } from "react";
import cardBlue from "../assets/images/contactAssets/contactCardBlue.png";
import cardYellow from "../assets/images/contactAssets/contactCardYellow.png";

const fieldClasses =
  "w-full rounded-md px-3 py-2 text-black bg-white/20 border border-black/10 " +
  "focus:border-black/20 focus:ring-2 focus:ring-black/10 outline-none " +
  "placeholder:text-black/50 transition";

  const btnClasses =
    "inline-flex items-center justify-center w-full rounded-lg px-4 py-2 text-base font-medium mb-10 " +
    "bg-white text-black shadow-sm transition " +
    "hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-black/20 " +
    "disabled:opacity-60 cursor-pointer";

    

  

const contacts = [
  {
    title: "Skriv til os",
    subtitle: "Send os en mail på knappen nedenfor",
    email: "info@gonow.dk",
    bg: cardBlue,
    type: "email",
  },
  {
    title: "Kontaktformular",
    subtitle: "Send en besked – Så vender vi retur hurtigst muligt",
    email: "info@gonow.dk",
    bg: cardYellow,
    type: "form",
  },
  {
    title: "Live Chat",
    subtitle: "Man – Fre : 8.00 – 15.00",
    bg: cardBlue,
    type: "chat",
  },
];

const ContactCard = ({ title, subtitle, email, bg, type }) => {
  const [form, setForm] = useState({
    name: "",
    from: "",
    subject: "",
    body: "",
  });
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

const [showStatus, setShowStatus] = useState(false);
const [fadeOut, setFadeOut] = useState(false);

useEffect(() => {
  if (status.ok !== null && status.msg) {
    setShowStatus(true);
    setFadeOut(false);

    const fadeT = setTimeout(() => setFadeOut(true), 5000); 
    const clearT = setTimeout(() => {
      setShowStatus(false);
      setStatus((s) => ({ ...s, ok: null, msg: "" }));
    }, 5000 + 350);

    return () => {
      clearTimeout(fadeT);
      clearTimeout(clearT);
    };
  }
}, [status.ok, status.msg]);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, ok: null, msg: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.from,
          subject: form.subject,
          message: form.body,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok)
        throw new Error(data.error || "Kunne ikke sende beskeden.");
      setStatus({ sending: false, ok: true, msg: "Tak! Din besked er sendt." });
      setForm({ name: "", from: "", subject: "", body: "" });
    } catch (err) {
      setStatus({
        sending: false,
        ok: false,
        msg: err.message || "Noget gik galt.",
      });
    }
  };

    const showUnavailable = () => {
      setStatus({
        sending: false,
        ok: false,
        msg:
          "Live chat er desværre ikke tilgængelig lige nu. " +
          "Kontakt os via formularen eller på info@gonow.dk, så vender vi retur hurtigst muligt.",
      });
    };

  return (
    <div className="w-full max-lg:mt-20 mb-0 lg:mb-28">
      <div
        className="flex flex-col items-center justify-center text-white rounded-xl relative overflow-visible h-full min-h-[320px] px-6"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="text-center space-y-5 mt-12 w-full max-w-sm mx-auto break-words">
          <p className="font-semibold text-2xl lg:text-3xl font-secondary">
            {title}
          </p>
          <p className="opacity-90 text-base font-secondary">{subtitle}</p>

          {type === "email" && (
            <a href={`mailto:${email}`} className={btnClasses}>
              Skriv til {email}
            </a>
          )}

          {type === "form" && (
            <div className="w-full max-w-md mx-auto text-left">
              <form onSubmit={onSubmit} className="space-y-3">
                <div>
                  <input
                    name="name"
                    type="text"
                    className={fieldClasses}
                    placeholder="Dit navn"
                    value={form.name}
                    onChange={onChange}
                    required
                  />
                </div>
                <div>
                  <input
                    name="from"
                    type="email"
                    className={fieldClasses}
                    placeholder="din@email.dk"
                    value={form.from}
                    onChange={onChange}
                    required
                  />
                </div>
                <div>
                  <input
                    name="subject"
                    type="text"
                    className={fieldClasses}
                    placeholder="Hvad drejer henvendelsen sig om?"
                    value={form.subject}
                    onChange={onChange}
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="body"
                    className={fieldClasses}
                    placeholder="Skriv din besked..."
                    value={form.body}
                    onChange={onChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.sending}
                  className={btnClasses}
                >
                  {status.sending ? "Sender..." : "Send besked"}
                </button>
              </form>
            </div>
          )}

          {type === "chat" && (
            <button onClick={showUnavailable} className={btnClasses}>
              Chat med os
            </button>
          )}

          <div className="relative  mb-2 h-10">
            <p
              role="status"
              aria-live={status.ok ? "polite" : "assertive"}
              aria-hidden={!showStatus}
              className={
                "absolute inset-0 flex items-center justify-center " +
                "text-xs rounded px-3 py-2 text-center pointer-events-none " +
                "transition-all duration-300 ease-out " +
                (status.ok === true
                  ? "bg-white/20 py-10 lg:py-8 font-secondary"
                  : status.ok === false
                  ? "bg-black/50 py-10 lg:py-8 font-secondary"
                  : "bg-transparent") +
                " " +
                (showStatus && !fadeOut
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-1")
              }
            >
              {status.ok === true ? "✅ " : status.ok === false ? "❌ " : ""}
              {status.msg}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section
      id="kontakt"
      className="scroll-mt-[15px] lg:scroll-mt-[50px] py-10 text-center px-6"
    >
      <div className="lg:mb-32">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-primary">
          Spørgsmål? Vi sidder klar til at hjælpe
        </h2>
        <p className="text-lg sm:text-lg md:text-xl mb-12 text-gray-700 max-w-4xl mx-auto font-secondary">
          Har du spørgsmål om funktioner, priser eller hvordan du kommer i gang
          med NOW? Vores team sidder klar til at hjælpe - kontakt os gerne for
          en hurtig afklaring.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-0 lg:gap-8 mb-12 lg:mb-10 sm:px-4 md:px-6 lg:px-24">
        {contacts.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
