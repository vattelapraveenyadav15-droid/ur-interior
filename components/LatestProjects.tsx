import Reveal from "./Reveal";
import Words from "./Words";
import { latestSpaces } from "@/lib/site";

export default function LatestProjects() {
  return (
    <section
      id="latest"
      className="latest"
      aria-labelledby="latest-title"
    >
      <Reveal className="latest-head">
        <h2 id="latest-title" className="latest-h2">
          <span>
            <Words text="OUR" mode="scroll" start={0} duration={0.9} />
          </span>
          <span>
            <Words text="LATEST" mode="scroll" start={0.15} duration={0.9} />
          </span>
          <span>
            <Words text="Spaces" mode="scroll" start={0.3} duration={0.9} />
          </span>
        </h2>
        <p className="lede mt-5 max-w-[26ch] text-[#3b3b3b]">
          Three living rooms handed over this season — shot on site, not styled in
          a studio.
        </p>
      </Reveal>

      <Reveal className="latest-grid">
        {latestSpaces.map((space, i) => (
          <a
            key={space.name}
            href="#projects"
            className="tile tile-rise"
            style={{ "--d": `${0.2 + i * 0.15}s` } as React.CSSProperties}
            aria-label={`${space.name} — view project`}
          >
            <img
              src={space.w500}
              srcSet={`${space.w500} 500w, /media/${space.img}-900.webp 900w`}
              sizes="(max-width: 640px) 74vw, (max-width: 1100px) 30vw, 22vw"
              width={space.width}
              height={space.height}
              alt={space.alt}
              loading="lazy"
              decoding="async"
            />
          </a>
        ))}
      </Reveal>
    </section>
  );
}
