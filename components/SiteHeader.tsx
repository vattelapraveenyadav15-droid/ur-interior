"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { useLang } from "./LanguageProvider";
import { CloseIcon, HouseIcon, MenuIcon, PhoneIcon } from "./Icons";

export function Logo({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={(size * 40) / 30}
      height={size}
      viewBox="0 0 40 30"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M20 1.5 38 14v14.5"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 1.5 2 14v14.5"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 11.5 30.5 19v9.5h-21V19L20 11.5Z" fill="#fff" fillOpacity=".92" />
      <path d="M16.4 28.5v-5.2h7.2v5.2" fill="#1150ef" />
    </svg>
  );
}

export default function SiteHeader() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const label = (item: (typeof nav)[number]) => (lang === "en" ? item.en : item.te);

  return (
    <header className="site-header">
      <a
        href="#home"
        className="brand nav-in"
        style={{ animationDelay: "0.1s" }}
      >
        <Logo />
        <span className="brand-word">
          UR
          <small>Interiors</small>
        </span>
      </a>

      <nav
        className="nav-pills"
        aria-label="Primary"
      >
        {nav.map((item, i) => (
          <a
            key={item.key}
            href={item.href}
            className={`pill nav-in ${i === 0 ? "pill--solid" : "pill--ghost"}`}
            style={{ animationDelay: `${0.2 + i * 0.08}s` }}
            aria-current={i === 0 ? "page" : undefined}
          >
            {i === 0 && <HouseIcon size={15} />}
            {label(item)}
          </a>
        ))}
      </nav>

      <div className="header-right">
        <div
          className="lang-switch nav-in"
          role="group"
          aria-label="Language"
          style={{ animationDelay: "0.52s" }}
        >
          <button
            type="button"
            className="lang-btn"
            aria-pressed={lang === "te"}
            onClick={() => setLang("te")}
            lang="te"
          >
            TE
          </button>
          <button
            type="button"
            className="lang-btn"
            aria-pressed={lang === "en"}
            onClick={() => setLang("en")}
            lang="en"
          >
            EN
          </button>
        </div>

        <a
          href="#contact"
          className="btn-outline btn-outline--header nav-in"
          style={{ animationDelay: "0.6s" }}
        >
          {lang === "en" ? "Book a consult" : "సంప్రదింపు బుక్ చేయండి"}
        </a>

        <button
          type="button"
          className="hamburger nav-in"
          style={{ animationDelay: "0.65s" }}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon size={18} /> : <MenuIcon size={20} />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="mobile-menu">
          {nav.map((item, i) => (
            <a
              key={item.key}
              href={item.href}
              className={`mobile-link ${i === 0 ? "mobile-link--solid" : ""}`}
              onClick={() => setOpen(false)}
            >
              {i === 0 && <HouseIcon size={16} />}
              {label(item)}
            </a>
          ))}
          <a
            href={`tel:${site.phoneRaw}`}
            className="mobile-link"
            onClick={() => setOpen(false)}
          >
            <PhoneIcon size={16} />
            {site.phone}
          </a>
        </div>
      )}
    </header>
  );
}
