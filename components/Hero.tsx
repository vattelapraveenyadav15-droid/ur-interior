"use client";

import HeroVideoCard from "./HeroVideoCard";
import Words from "./Words";
import { ArrowUpRight } from "./Icons";
import { useLang } from "./LanguageProvider";

export default function Hero() {
  const { lang, switched } = useLang();
  const animate = !switched;

  const tagline =
    lang === "en"
      ? [
          ["Interior design studio", 1.15],
          ["for calm, detailed homes", 1.33],
          ["across Hyderabad.", 1.57],
        ]
      : [
          ["హైదరాబాద్ అంతటా", 1.15],
          ["ప్రశాంతమైన, వివరాలతో కూడిన", 1.33],
          ["ఇంటి ఇంటీరియర్లు.", 1.57],
        ];

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="grid-lines" aria-hidden="true">
        {[4.8, 35.45, 64.7, 95.2].map((left, i) => (
          <span
            key={left}
            className="grid-line"
            style={{ left: `${left}%`, animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>

      <img
        className="hero-house"
        src="/media/hero-villa-1500.webp"
        srcSet="/media/hero-villa-900.webp 900w, /media/hero-villa-1200.webp 1200w, /media/hero-villa-1500.webp 1500w, /media/hero-villa-2000.webp 2000w"
        sizes="(max-width: 860px) 96vw, max(83vw, 640px)"
        width={1500}
        height={1048}
        alt="Modern Hyderabad villa at dusk with warm-lit interiors and wood-slat façade, designed by UR Interiors"
        fetchPriority="high"
        decoding="async"
      />

      <div className="hero-top">
        <h1 id="hero-title" className="hero-h1">
          {[
            ["UR", 0.15],
            ["Interiors", 0.28],
          ].map(([word, delay]) => (
            <span className="line" key={String(word)}>
              <Words text={String(word).toUpperCase()} start={Number(delay)} duration={0.85} />
            </span>
          ))}
        </h1>

        <p className="hero-tagline">
          {tagline.map(([line, delay]) => (
            <span className="line" key={String(line)}>
              <Words
                text={String(line).toUpperCase()}
                start={Number(delay)}
                step={0.06}
                duration={0.7}
                animate={animate}
              />
            </span>
          ))}
        </p>
      </div>

      <div className="hero-explore">
        <a href="#projects" className="explore-link">
          <Words
            text={lang === "en" ? "EXPLORE OUR PROJECTS" : "మా ప్రాజెక్టులను చూడండి"}
            start={1.85}
            duration={0.8}
            animate={animate}
          />
          <ArrowUpRight size={18} />
        </a>
      </div>

      <HeroVideoCard />
    </section>
  );
}
