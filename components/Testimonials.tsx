import Reveal from "./Reveal";
import Words from "./Words";
import { testimonials } from "@/lib/site";
import { StarIcon } from "./Icons";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section bg-white py-[clamp(56px,7vw,110px)]"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto max-w-[1400px] px-[clamp(16px,4vw,70px)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">Client notes</p>
            <h2 id="testimonials-title" className="h2-display mt-4 max-w-[21ch]">
              <Words text="Reviewed by the" mode="scroll" duration={0.9} />{" "}
              <em className="not-italic text-clay">
                <Words text="families who live there." mode="scroll" start={0.15} duration={0.9} />
              </em>
            </h2>
          </Reveal>

          <Reveal className="flex items-center gap-3 rounded-full border border-line px-5 py-3">
            <span className="flex text-clay" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} size={14} />
              ))}
            </span>
            <span className="font-[family-name:var(--font-body)] text-[13px] text-ink">
              <strong className="font-medium">4.9 / 5</strong>{" "}
              <span className="text-ink-soft">from 240+ homeowners</span>
            </span>
          </Reveal>
        </div>

        <Reveal as="ul" className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <li
              key={t.name}
              className="quote-card tile-rise"
              style={{ "--d": `${0.08 * i}s` } as React.CSSProperties}
            >
              <span className="flex text-clay" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon key={s} size={13} />
                ))}
              </span>
              <blockquote className="m-0">
                <p>“{t.quote}”</p>
              </blockquote>
              <div className="mt-auto flex items-center gap-3 pt-1">
                <span className="avatar" aria-hidden="true">
                  {t.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <span className="font-[family-name:var(--font-body)] text-[13.5px] leading-tight text-ink">
                  {t.name}
                  <br />
                  <span className="text-[12.5px] text-ink-soft">{t.meta}</span>
                </span>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
