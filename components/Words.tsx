/**
 * Word-by-word text animation helper.
 * Splits a string into <span class="word"> elements and staggers their delay.
 * Server-renderable (no hooks) so the copy stays in the HTML for SEO.
 */
type Props = {
  text: string;
  /** delay of the first word, in seconds */
  start?: number;
  /** delay added per word, in seconds */
  step?: number;
  /** animation duration, in seconds */
  duration?: number;
  /** "load" = animates on page load, "scroll" = waits for .is-in on an ancestor */
  mode?: "load" | "scroll";
  className?: string;
  /** false = render as plain text (used after a language switch) */
  animate?: boolean;
};

export default function Words({
  text,
  start = 0,
  step = 0,
  duration = 1,
  mode = "load",
  className,
  animate = true,
}: Props) {
  const words = text.split(" ");

  if (!animate) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span
            className={`word word--${mode}`}
            style={
              {
                "--d": `${(start + i * step).toFixed(2)}s`,
                "--dur": `${duration}s`,
              } as React.CSSProperties
            }
          >
            {word}
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}
