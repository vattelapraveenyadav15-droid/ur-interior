import { nav, services, site } from "@/lib/site";
import { Logo } from "./SiteHeader";
import { ArrowUpRight, MailIcon, PhoneIcon, PinIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1400px] px-[clamp(16px,4vw,70px)] py-[clamp(44px,5vw,80px)]">
        <div className="grid gap-[clamp(28px,4vw,64px)] lg:grid-cols-[1.2fr_0.7fr_0.7fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <Logo size={34} />
              <span className="brand-word text-[19px]">
                UR
                <small className="mt-[6px] text-[9px]">Interiors</small>
              </span>
            </a>
            <p className="mt-5 max-w-[34ch] font-[family-name:var(--font-body)] text-[14px] leading-relaxed text-white/70">
              An interior design studio in Miyapur, Hyderabad — designing
              kitchens, wardrobes, false ceilings and full homes since {site.founded}.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-[family-name:var(--font-sans)] text-[11px] uppercase tracking-[0.2em] text-white/60">
              Studio
            </h2>
            <ul className="mt-4 space-y-1">
              {nav.map((item) => (
                <li key={item.key}>
                  <a href={item.href} className="footer-link">
                    {item.en}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faq" className="footer-link">
                  FAQs
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-[family-name:var(--font-sans)] text-[11px] uppercase tracking-[0.2em] text-white/60">
              Services
            </h2>
            <ul className="mt-4 space-y-1">
              {services.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="footer-link">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-sans)] text-[11px] uppercase tracking-[0.2em] text-white/60">
              Visit the studio
            </h2>
            <address className="mt-4 not-italic">
              <p className="flex gap-2 font-[family-name:var(--font-body)] text-[14px] leading-relaxed text-white/66">
                <PinIcon size={16} className="mt-1 flex-none text-white/40" />
                <span>
                  {site.address.street},<br />
                  {site.address.locality}, {site.address.region}{" "}
                  {site.address.postalCode}
                </span>
              </p>
              <p className="mt-3 flex items-center gap-2">
                <PhoneIcon size={15} className="text-white/40" />
                <a href={`tel:${site.phoneRaw}`} className="footer-link">
                  {site.phone}
                </a>
              </p>
              {site.email ? (
                <p className="mt-2 flex items-center gap-2">
                  <MailIcon size={15} className="text-white/40" />
                  <a href={`mailto:${site.email}`} className="footer-link">
                    {site.email}
                  </a>
                </p>
              ) : null}
            </address>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-[family-name:var(--font-sans)] text-[13px] text-ink transition-transform hover:-translate-y-0.5"
            >
              Book a free consult
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/12 pt-6">
          <h2 className="font-[family-name:var(--font-sans)] text-[11px] uppercase tracking-[0.2em] text-white/60">
            Interior design services across Hyderabad
          </h2>
          <p className="mt-3 font-[family-name:var(--font-body)] text-[13px] leading-relaxed text-white/65">
            {site.areasServed.join(" · ")}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/12 pt-6 font-[family-name:var(--font-body)] text-[12.5px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            Interior designers in Miyapur, Hyderabad, Telangana
          </p>
        </div>
      </div>
    </footer>
  );
}
