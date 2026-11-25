"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "./LanguageProvider";
import Words from "./Words";

const CLIPS = 4;

export default function HeroVideoCard() {
  const { lang, switched } = useLang();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [active, setActive] = useState(0);

  const resume = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    const attempt = v.play();
    if (attempt && typeof attempt.catch === "function") {
      // Autoplay can be blocked until a gesture — the caption stays visible,
      // and the first tap/keypress below resumes playback.
      attempt.catch(() => {});
    }
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.defaultMuted = true;
    v.loop = true;
    resume();

    // Keep the film running no matter what the browser does to it.
    const hardKeepAlive = ["pause", "ended", "stalled", "suspend", "emptied"].map(
      (event) => {
        const handler = () => {
          if (event === "pause" && document.hidden) return;
          resume();
        };
        v.addEventListener(event, handler);
        return () => v.removeEventListener(event, handler);
      },
    );

    const onTime = () => {
      if (!v.duration || Number.isNaN(v.duration)) return;
      const part = Math.min(
        CLIPS - 1,
        Math.floor((v.currentTime / v.duration) * CLIPS),
      );
      setActive((prev) => (prev === part ? prev : part));
    };
    v.addEventListener("timeupdate", onTime);

    const interval = window.setInterval(() => {
      if (v.paused || v.ended) resume();
    }, 1000);

    const onVisible = () => {
      if (!document.hidden) resume();
    };
    const onFirstGesture = () => resume();

    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("pointerdown", onFirstGesture, { once: true });
    window.addEventListener("touchstart", onFirstGesture, {
      once: true,
      passive: true,
    });
    window.addEventListener("focus", onVisible);

    return () => {
      hardKeepAlive.forEach((off) => off());
      v.removeEventListener("timeupdate", onTime);
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("pointerdown", onFirstGesture);
      window.removeEventListener("touchstart", onFirstGesture);
      window.removeEventListener("focus", onVisible);
    };
  }, [resume]);

  const jump = (index: number) => {
    const v = videoRef.current;
    if (!v || !v.duration || Number.isNaN(v.duration)) return;
    v.currentTime = (v.duration / CLIPS) * index + 0.05;
    setActive(index);
    resume();
  };

  return (
    <div className="hero-card">
      <div className="card-video-box">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/hero-film-poster.jpg"
          tabIndex={-1}
          aria-label="Short film of UR Interiors homes in Hyderabad"
        >
          <source src="/media/hero-film.mp4" type="video/mp4" />
        </video>
      </div>

      <p className="card-caption">
        <span className="line">
          <Words
            text={lang === "en" ? "Find a home that" : "మీ లైఫ్‌స్టైల్‌కి తగిన"}
            start={2.15}
            step={0.06}
            duration={0.7}
            animate={!switched}
          />
        </span>
        <span className="line">
          <Words
            text={lang === "en" ? "feels like you" : "ఇల్లు ఇక్కడ ఉంది"}
            start={2.39}
            step={0.06}
            duration={0.7}
            animate={!switched}
          />
        </span>
      </p>

      <div className="card-bars" role="group" aria-label="Film chapters">
        {Array.from({ length: CLIPS }).map((_, i) => (
          <button
            key={i}
            type="button"
            className="card-bar"
            aria-current={active === i}
            aria-label={`Play chapter ${i + 1} of ${CLIPS}`}
            onClick={() => jump(i)}
          >
            <span className="card-bar-fill" />
          </button>
        ))}
      </div>
    </div>
  );
}
