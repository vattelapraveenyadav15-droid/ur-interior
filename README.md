# UR Interiors — Interior Design Studio, Hyderabad

A production-ready, SEO-optimised marketing site for **UR Interiors**, an interior design
studio in Jubilee Hills, Hyderabad. Built with **Next.js 15 (App Router)**, **React 19**,
**Tailwind CSS v4** and hand-written CSS for the hero motion system.

The design follows the supplied creative brief (blue gradient hero, vertical grid lines,
word-by-word entrance animation, bottom-left video card, "Our Latest Spaces" gallery) and
extends it into a complete business website: about, services, process, portfolio,
testimonials, FAQ, lead form and footer with local SEO data.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

Environment (optional, recommended in production):

```bash
cp .env.example .env.local
# NEXT_PUBLIC_SITE_URL=https://www.ur-interiors.in
```

`NEXT_PUBLIC_SITE_URL` is used for canonical URLs, Open Graph, `sitemap.xml`, `robots.txt`
and the JSON-LD `@id`s. If it is missing the site falls back to the domain in `lib/site.ts`.

---

## Project structure

```
app/
  layout.tsx        fonts, metadata, viewport, JSON-LD (LocalBusiness + WebSite + FAQPage)
  page.tsx          the one-page composition
  globals.css       design tokens, hero motion system, component styles
  sitemap.ts        /sitemap.xml
  robots.ts         /robots.txt
  manifest.ts       /manifest.webmanifest
  icon.svg          favicon
  not-found.tsx     404 page
components/
  SiteHeader.tsx    logo, pill nav, TE/EN switch, mobile menu
  Hero.tsx          headline, tagline, explore link, grid lines, hero villa image
  HeroVideoCard.tsx video card with 4 progress chapters + keep-alive playback logic
  LatestProjects.tsx  "Our Latest Spaces" gallery (scroll-reveal)
  Words.tsx         word-by-word animation helper (server-renderable)
  Reveal.tsx        IntersectionObserver wrapper (progressive enhancement)
  LanguageProvider.tsx  EN/TE language context
  Stats / About / Services / Process / ProjectsShowcase / Testimonials / Faq / Contact /
  Footer / FloatingActions / Icons
lib/
  site.ts           ← ALL copy, prices, projects, FAQs and business facts live here
  schema.ts         JSON-LD builders
public/
  media/            optimised WebP images + hero film (mp4) + poster
  og.jpg            1200×630 social share image
  logo.png          512×512 logo (schema.org logo)
AUDIT.md            full SEO / performance / accessibility audit + score history
```

### Editing content

Almost everything is data-driven. Open **`lib/site.ts`** to change the studio name, phone,
address, opening hours, service areas, services and prices, project list, testimonials and
FAQs. Headlines that are animated word-by-word are written directly in the section
components — look for `<Words text="…" />`.

Replace photos in `public/media/` keeping the same file names, or add new files and update
the `srcSet` entries in the components. Keep the same aspect ratios to avoid layout shift:
gallery/portfolio = 4:5, about = 16:9-ish, hero villa = transparent PNG exported as WebP.

---

## The hero animation system

| Element | Behaviour |
| --- | --- |
| Page gradient | `linear-gradient(180deg, #1150ef → #ffffff)` with 3 radial cloud glows |
| Grid lines | 4 × 1px at 4.8% / 35.45% / 64.7% / 95.2%, grow down (`scaleY`), 1.6s, 0–0.3s stagger |
| Header | fade-down per item, 0.8s, `0.1 → 0.65s` stagger |
| Hero villa | parallax rise from the bottom, 4.2s `cubic-bezier(.22,.61,.24,1)`, 0.2s delay |
| H1 / tagline / links / caption | word-by-word `wordIn` (opacity + `translateY(.45em)` + `blur(10px)`) |
| Video card | rises in at 2s, progress bars grow at 2.55s |
| Section 2 | IntersectionObserver at 0.15 → heading words and cards rise in |

All scroll animations are **progressive enhancement**: the HTML is server-rendered and
readable without JavaScript (a `<noscript>` rule unhides everything), and
`prefers-reduced-motion: reduce` disables all motion and shows final states instantly.

The **video card never stops**: it re-plays on `pause`, `ended`, `stalled`, `suspend`,
`emptied`, is polled every second, resumes on tab visibility change / focus / first tap, and
its 4 progress bars map to the video duration — click a bar to jump to that chapter.

---

## Lead form

The contact form validates on the client (name + 10-digit mobile) and then composes a
pre-filled **WhatsApp** message to the studio (`components/Contact.tsx`). This works with
zero backend, which is what most Hyderabad clients actually use.

To send leads to email/CRM instead, replace the `window.open(...)` call with:

```ts
await fetch("/api/leads", { method: "POST", body: new FormData(form) });
```

and add `app/api/leads/route.ts` that forwards to your provider (Resend, Formspree, Zapier…).

---

## Deploy

**Vercel (recommended):** import the repo → framework auto-detected → add
`NEXT_PUBLIC_SITE_URL` → deploy → point the domain. After the first crawl, submit
`sitemap.xml` in Google Search Console and add the same URL as the website in the Google
Business Profile.

Any Node host works: `npm ci && npm run build && npm start` (Node 20+).

---

See **AUDIT.md** for the Lighthouse results, the SEO checklist, everything that was fixed
during the audit, and the recommended next steps.
