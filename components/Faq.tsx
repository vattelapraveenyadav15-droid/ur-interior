import Reveal from "./Reveal";
import Words from "./Words";
import { faqs, site } from "@/lib/site";
import { PlusIcon, PhoneIcon } from "./Icons";

export default function Faq() {
  return (
    <section id="faq" className="section bg-sand py-[clamp(56px,7vw,110px)]">
      <div className="mx-auto grid max-w-[1400px] gap-[clamp(28px,4vw,64px)] px-[clamp(16px,4vw,70px)] lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="eyebrow">Questions</p>
          <h2 className="h2-display mt-4 max-w-[15ch]">
            <Words text="The things people" mode="scroll" duration={0.9} />{" "}
            <em className="not-italic text-clay">
              <Words text="ask us first." mode="scroll" start={0.15} duration={0.9} />
            </em>
          </h2>
          <p className="lede mt-5 max-w-[34ch]">
            Still unsure about scope, budget or timelines? Call the studio — you will
            speak to a designer, not a call centre.
          </p>
          <a
            href={`tel:${site.phoneRaw}`}
            className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-sans)] text-[15px] text-ink hover:text-blue"
          >
            <PhoneIcon size={16} />
            {site.phone}
          </a>
        </Reveal>

        <Reveal className="border-t border-line">
          {faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>
                <span>{f.q}</span>
                <span className="faq-plus" aria-hidden="true">
                  <PlusIcon size={13} />
                </span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
