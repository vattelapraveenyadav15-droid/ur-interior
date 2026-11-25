import Reveal from "./Reveal";
import Words from "./Words";
import { ServiceIcon, ArrowUpRight } from "./Icons";
import { services } from "@/lib/site";

export default function Services() {
  return (
    <section
      id="services"
      className="section mt-[clamp(64px,8vw,120px)] bg-sand py-[clamp(56px,7vw,110px)]"
    >
      <div className="mx-auto max-w-[1400px] px-[clamp(16px,4vw,70px)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">What we design</p>
            <h2 className="h2-display mt-4 max-w-[15ch]">
              <Words text="Every room," mode="scroll" duration={0.9} />{" "}
              <em className="not-italic">
                <Words
                  text="one team."
                  mode="scroll"
                  start={0.15}
                  duration={0.9}
                />
              </em>
            </h2>
            <p className="lede mt-5 max-w-[38ch]">
              Pick a single room or hand us the keys — the finish, hardware and
              detailing stay consistent either way.
            </p>
          </Reveal>

          <Reveal className="font-[family-name:var(--font-body)] text-[13px] text-ink-soft">
            <p className="max-w-[34ch]">
              Indicative starting prices for a 3BHK in Hyderabad. Final quote follows
              the free site measurement.
            </p>
          </Reveal>
        </div>

        <Reveal as="ul" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li
              key={s.title}
              className="service-card tile-rise"
              style={{ "--d": `${0.05 * i}s` } as React.CSSProperties}
            >
              <span className="service-icon">
                <ServiceIcon name={s.icon} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="font-[family-name:var(--font-sans)] text-[12px] uppercase tracking-[0.12em] text-clay">
                  {s.price}
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 font-[family-name:var(--font-sans)] text-[13px] text-ink hover:text-blue"
                  aria-label={`Enquire about ${s.title}`}
                >
                  Enquire
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
