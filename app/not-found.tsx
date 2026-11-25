import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-5 bg-sand px-6 py-24 text-center text-ink">
      <p className="eyebrow">404</p>
      <h1 className="font-[family-name:var(--font-display)] text-[clamp(32px,5vw,60px)] leading-none">
        This room hasn’t been designed yet.
      </h1>
      <p className="max-w-[44ch] font-[family-name:var(--font-body)] text-[15px] leading-relaxed text-ink-soft">
        The page you were looking for has moved. Head back to the studio and explore
        our interiors in Hyderabad.
      </p>
      <Link href="/" className="btn-primary mt-2">
        Back to the homepage
      </Link>
    </main>
  );
}
