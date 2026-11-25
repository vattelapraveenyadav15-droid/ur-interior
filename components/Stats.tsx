import Reveal from "./Reveal";
import Words from "./Words";
import { site } from "@/lib/site";
import { StarIcon } from "./Icons";

export default function Stats() {
  return (
    <section className="section bg-white pt-[clamp(36px,4vw,64px)]" aria-label="UR Interiors at a glance">
      <div className="mx-auto max-w-[1400px] px-[clamp(16px,4vw,70px)]">
        <Reveal className="grid grid-cols-2 gap-y-9 border-y border-line py-9 md:grid-cols-4">
          {site.stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col gap-1 md:px-8 ${
                i > 0 ? "md:border-l md:border-line" : ""
              }`}
            >
              <span
                className="flex items-baseline gap-1.5 font-[family-name:var(--font-display)] text-[clamp(30px,3.4vw,46px)] leading-none text-ink"
                style={{ "--d": `${i * 0.08}s` } as React.CSSProperties}
              >
                <Words text={s.value} mode="scroll" duration={0.8} />
                {s.label.includes("rating") && (
                  <StarIcon size={14} className="text-clay" />
                )}
              </span>
              <span className="font-[family-name:var(--font-body)] text-[13px] leading-snug text-ink-soft">
                {s.label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
