import Reveal from "./Reveal";
import Words from "./Words";
import { ArrowRight, PinIcon } from "./Icons";

const promises = [
  "One designer, one supervisor and one invoice from first sketch to handover.",
  "Line-item pricing in writing — no charges added after the advance.",
  "BWP marine-ply carcasses and branded hardware, warranty in writing.",
  "Site visits across Hyderabad within the ORR are always free.",
];

export default function About() {
  return (
    <section id="about" className="section bg-white pt-[clamp(64px,8vw,120px)]">
      <div className="mx-auto grid max-w-[1400px] items-center gap-[clamp(32px,4vw,72px)] px-[clamp(16px,4vw,70px)] lg:grid-cols-[1.05fr_1fr]">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[22px]">
            <img
              src="/media/about-1500.webp"
              srcSet="/media/about-900.webp 900w, /media/about-1500.webp 1500w"
              sizes="(max-width: 1024px) 92vw, 46vw"
              width={1500}
              height={837}
              alt="Double-height living room in a Hyderabad villa with cream sofas, oak flooring and a large abstract artwork by UR Interiors"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -right-3 -bottom-10 hidden w-[34%] overflow-hidden rounded-2xl border-[6px] border-white shadow-[0_24px_50px_-30px_rgba(10,25,60,.55)] lg:block">
            <img
              src="/media/office-700.webp"
              srcSet="/media/office-700.webp 700w, /media/office-1200.webp 1200w"
              sizes="18vw"
              width={700}
              height={1254}
              alt="Home office with walnut bookshelf and integrated lighting designed by UR Interiors in Hyderabad"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_24px_50px_-30px_rgba(10,25,60,.55)] ring-1 ring-line sm:left-6 sm:px-5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-clay-soft text-clay">
              <PinIcon size={18} />
            </span>
            <span className="font-[family-name:var(--font-body)] text-[13px] leading-tight text-ink">
              Based in Miyapur
              <br />
              <span className="text-ink-soft">Serving all of Hyderabad</span>
            </span>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">The studio</p>
            <h2 className="h2-display mt-4 max-w-[18ch]">
              <Words
                text="Interiors that hold up"
                mode="scroll"
                start={0}
                duration={0.9}
              />{" "}
              <em className="not-italic text-clay">
                <Words text="to real life." mode="scroll" start={0.18} duration={0.9} />
              </em>
            </h2>
          </Reveal>

          <Reveal className="mt-6 space-y-4">
            <p className="lede">
              UR Interiors began in {2015} with two designers, one carpenter and a
              stubborn belief: a beautiful home should still survive a Hyderabadi
              summer, a joint family and a toddler with a crayon.
            </p>
            <p className="lede">
              A decade and 780 homes later, we still work the same way — measure
              everything, draw it in 3D, quote it honestly and build it with our own
              team. No subcontracted surprises.
            </p>
          </Reveal>

          <Reveal as="ul" className="mt-8 space-y-3">
            {promises.map((p) => (
              <li
                key={p}
                className="flex gap-3 font-[family-name:var(--font-body)] text-[14.5px] leading-relaxed text-ink-soft"
              >
                <span
                  aria-hidden="true"
                  className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-clay"
                />
                {p}
              </li>
            ))}
          </Reveal>

          <Reveal className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="btn-dark">
              Book a free site visit
              <ArrowRight size={16} />
            </a>
            <a href="#projects" className="btn-ghost-dark">
              See our work
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
