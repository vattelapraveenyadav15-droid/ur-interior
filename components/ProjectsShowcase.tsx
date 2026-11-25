import Reveal from "./Reveal";
import Words from "./Words";
import { projects } from "@/lib/site";
import { ArrowUpRight } from "./Icons";

function sources(img: string) {
  const isLiving = img.startsWith("living");
  const big = isLiving ? 900 : 1200;
  const small = isLiving ? 500 : 700;
  return {
    src: `/media/${img}-${small}.webp`,
    srcSet: `/media/${img}-${small}.webp ${small}w, /media/${img}-${big}.webp ${big}w`,
  };
}

export default function ProjectsShowcase() {
  return (
    <section
      id="projects"
      className="section bg-sand py-[clamp(56px,7vw,110px)]"
    >
      <div className="mx-auto max-w-[1400px] px-[clamp(16px,4vw,70px)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">Selected work</p>
            <h2 className="h2-display mt-4 max-w-[13ch]">
              <Words text="Homes across" mode="scroll" duration={0.9} />{" "}
              <em className="not-italic text-clay">
                <Words text="Hyderabad." mode="scroll" start={0.15} duration={0.9} />
              </em>
            </h2>
          </Reveal>
          <Reveal>
            <a href="#contact" className="btn-ghost-dark">
              Request the full portfolio
              <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>

        <Reveal as="ul" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const { src, srcSet } = sources(p.img);
            return (
              <li key={p.name} className="tile-rise" style={{ "--d": `${0.06 * i}s` } as React.CSSProperties}>
                <a href="#contact" className="project block aspect-[4/5]">
                  <img
                    src={src}
                    srcSet={srcSet}
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                    width={p.width}
                    height={p.height}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="project-meta">
                    <span>
                      <h3>{p.name}</h3>
                      <p>{p.location}</p>
                      <span className="sr-only">
                        — enquire about a similar project
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="grid h-9 w-9 flex-none place-items-center rounded-full bg-white/15 backdrop-blur-sm"
                    >
                      <ArrowUpRight size={15} />
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
