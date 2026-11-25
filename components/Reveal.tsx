"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Adds `.is-in` when the wrapper scrolls into view (threshold .15),
 * which triggers the child `.word--scroll` / `.tile-rise` animations.
 * Content is always rendered on the server, so it is crawlable.
 */
export default function Reveal({
  children,
  className,
  as: Tag = "div",
  threshold = 0.15,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "ul" | "li" | "article" | "header";
  threshold?: number;
  id?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <Tag
      id={id}
      ref={ref as React.Ref<never>}
      className={`${className ?? ""} ${shown ? "is-in" : ""}`.trim()}
    >
      {children}
    </Tag>
  );
}
