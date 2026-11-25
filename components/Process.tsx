import Reveal from "./Reveal";
import Words from "./Words";
import { processSteps } from "@/lib/site";

export default function Process() {
  return (
    <section id="process" className="section bg-white py-[clamp(56px,7vw,110px)]">
      <div className="mx-auto max-w-[1400px] px-[clamp(16px,4vw,70px)]">
        <Reveal className="mx-auto max-w-[62ch] text-center">
          <p className="eyebrow justify-center before:hidden">How it works</p>
          <h2 className="h2-display mx-auto mt-4 max-w-[20ch]">
            <Words text="Four steps. Forty-five" mode="scroll" duration={0.9} />{" "}
            <em className="not-italic text-clay">
              <Words text="working days." mode="scroll" start={0.2} duration={0.9} />
            </em>
          </h2>
          <p className="lede mx-auto mt-5 max-w-[52ch]">
            A rhythm we have refined across 780 homes — so you always know what
            happens next and who is accountable for it.
          </p>
        </Reveal>

        <Reveal as="ul" className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li
              key={step.no}
              className="step tile-rise"
              style={{ "--d": `${0.08 * i}s` } as React.CSSProperties}
            >
              <span className="step-no">{step.no}</span>
              <h3 className="mt-3 font-[family-name:var(--font-sans)] text-[17px] tracking-[-0.02em] text-ink">
                {step.title}
              </h3>
              <p className="mt-2 font-[family-name:var(--font-body)] text-[14.5px] leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </li>
          ))}
        </Reveal>

        <Reveal className="mt-12 flex justify-center">
          <a href="#contact" className="btn-primary">
            Start with a free consultation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
