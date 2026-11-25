"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Words from "./Words";
import { site, services } from "@/lib/site";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

type Errors = { name?: string; phone?: string };

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  /**
   * No backend is required for the lead to reach you: the form composes a
   * pre-filled WhatsApp message (the channel 90% of Hyderabad clients prefer)
   * and copies the details for the studio inbox.
   * To move to email/CRM instead, POST `formData` to /api/leads and swap
   * `window.open` for that fetch call.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const next: Errors = {};

    if (name.length < 2) next.name = "Please tell us your name.";
    if (!/^[+]?[\d\s-]{10,15}$/.test(phone))
      next.phone = "Enter a 10-digit mobile number.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const lines = [
      `New enquiry — ${site.name} website`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${String(data.get("email") ?? "—") || "—"}`,
      `Service: ${String(data.get("service") ?? "—")}`,
      `Area: ${String(data.get("area") ?? "—") || "—"}`,
      `Message: ${String(data.get("message") ?? "—") || "—"}`,
    ];

    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    form.reset();
  };

  return (
    <section id="contact" className="section bg-white pt-[clamp(8px,2vw,24px)] pb-[clamp(56px,7vw,110px)]">
      <div className="mx-auto max-w-[1400px] px-[clamp(16px,4vw,70px)]">
        <Reveal className="overflow-hidden rounded-[26px] bg-blue px-[clamp(20px,3vw,52px)] py-[clamp(32px,4vw,64px)] text-white">
          <div className="grid gap-[clamp(28px,4vw,64px)] lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow text-white">Start here</p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(30px,3.6vw,52px)] leading-[1.06] tracking-[-0.015em]">
                <Words text="Tell us about" mode="scroll" duration={0.9} />{" "}
                <em className="not-italic text-white/70">
                  <Words text="your home." mode="scroll" start={0.15} duration={0.9} />
                </em>
              </h2>
              <p className="mt-5 max-w-[36ch] font-[family-name:var(--font-body)] text-[15px] leading-relaxed text-white/90">
                Share a few details and a designer from the Miyapur studio will
                call you within one working day to book a free site visit.
              </p>

              <dl className="mt-8 space-y-4 font-[family-name:var(--font-body)] text-[14.5px]">
                <div className="flex gap-3">
                  <dt className="mt-0.5 text-white/70" aria-label="Phone">
                    <PhoneIcon size={17} />
                  </dt>
                  <dd className="m-0">
                    <a href={`tel:${site.phoneRaw}`} className="hover:underline">
                      {site.phone}
                    </a>
                  </dd>
                </div>
                {site.email ? (
                  <div className="flex gap-3">
                    <dt className="mt-0.5 text-white/70" aria-label="Email">
                      <MailIcon size={17} />
                    </dt>
                    <dd className="m-0">
                      <a href={`mailto:${site.email}`} className="hover:underline">
                        {site.email}
                      </a>
                    </dd>
                  </div>
                ) : null}
                <div className="flex gap-3">
                  <dt className="mt-0.5 text-white/70" aria-label="Studio address">
                    <PinIcon size={17} />
                  </dt>
                  <dd className="m-0">
                    <address className="not-italic text-white/90">
                      {site.address.street},<br />
                      {site.address.locality}, {site.address.region}{" "}
                      {site.address.postalCode}
                    </address>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="mt-0.5 text-white/70" aria-label="Studio hours">
                    <ClockIcon size={17} />
                  </dt>
                  <dd className="m-0 text-white/90">{site.hours}</dd>
                </div>
              </dl>

              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 font-[family-name:var(--font-sans)] text-[13.5px] transition-colors hover:bg-white hover:text-blue"
              >
                <WhatsAppIcon size={17} />
                Chat on WhatsApp
              </a>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2" noValidate>
              <div className="field sm:col-span-1">
                <label htmlFor="name">Your name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Ananya Rao"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  required
                />
                {errors.name && (
                  <span id="name-error" className="text-[12px] text-white" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="field sm:col-span-1">
                <label htmlFor="phone">Mobile number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+91 98490 12345"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  required
                />
                {errors.phone && (
                  <span id="phone-error" className="text-[12px] text-white" role="alert">
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className="field sm:col-span-2">
                <label htmlFor="email">Email (optional)</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="field">
                <label htmlFor="service">Interested in</label>
                <select id="service" name="service" defaultValue={services[0].title}>
                  {services.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="area">Locality in Hyderabad</label>
                <input
                  id="area"
                  name="area"
                  type="text"
                  placeholder="Kokapet, 3BHK"
                  autoComplete="address-level2"
                />
              </div>

              <div className="field sm:col-span-2">
                <label htmlFor="message">Anything else?</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Possession date, budget range, rooms to start with…"
                />
              </div>

              <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
                <button type="submit" className="btn-dark bg-white text-blue hover:bg-white/90">
                  Request a callback
                </button>
                <span className="font-[family-name:var(--font-body)] text-[12.5px] text-white/90">
                  We reply in one working day. No spam, ever.
                </span>
              </div>

              <p
                aria-live="polite"
                className="sm:col-span-2 min-h-[20px] font-[family-name:var(--font-body)] text-[13px] text-white"
              >
                {sent
                  ? "Thank you — your details are ready in WhatsApp. Press send and we will call you back within one working day."
                  : ""}
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
