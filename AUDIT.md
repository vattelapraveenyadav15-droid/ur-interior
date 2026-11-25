# UR Interiors — SEO, Performance & Accessibility Audit

**Audited:** 19 November 2026 · **Build:** Next.js 15.5 (static export of `/`, `sitemap.xml`,
`robots.txt`, `manifest.webmanifest`) · **Environment:** production build (`next build` +
`next start`), Lighthouse 12, Chromium 130.

---

## 1. Headline results

| Category | Mobile | Desktop |
| --- | --- | --- |
| Performance | **90** | **100** |
| Accessibility | **100** | **100** |
| Best Practices | **100** | **100** |
| SEO | **100** | **100** |

Core Web Vitals (Lighthouse lab data, mobile = Moto G4 / Slow 4G, 4× CPU throttle):

| Metric | Mobile | Desktop | Target |
| --- | --- | --- | --- |
| First Contentful Paint | 1.3 s | 0.3 s | < 1.8 s ✅ |
| Largest Contentful Paint | 3.6 s | 0.8 s | < 2.5 s ⚠️ (see §6) |
| Total Blocking Time | 40 ms | 0 ms | < 200 ms ✅ |
| Cumulative Layout Shift | **0** | **0** | < 0.1 ✅ |
| Speed Index | 1.4 s | 0.6 s | < 3.4 s ✅ |
| Page weight | 1.95 MB | 2.0 MB | ≤ 2 MB ✅ |
| JS shipped (first load) | 110 kB | 110 kB | ≤ 150 kB ✅ |

How to reproduce:

```bash
npm run build && npm start        # production server on :3000
npx lighthouse http://localhost:3000 --preset=desktop --view
npx lighthouse http://localhost:3000 --view      # mobile
```

---

## 2. SEO implementation

**Technical**
- `metadataBase` + **canonical** (`/`) and `hreflang` (`en-IN`, `te-IN`) alternates.
- Per-page `title` (55–60 chars) with template `%s | UR Interiors Hyderabad`, 160-char
  meta description containing the primary keyword and the city.
- Open Graph (1200×630 branded `og.jpg`) + `twitter:summary_large_image`.
- `robots: index, follow` with `max-image-preview: large`, `max-snippet: -1`.
- `sitemap.xml` (with priorities + change frequency), `robots.txt` (sitemap + host),
  `manifest.webmanifest`, favicon `icon.svg`, `theme-color`.
- Fully **static rendered** — the complete HTML (all copy, project names, FAQs) is in the
  first response; no client-side content dependency.
- Clean semantic URL (`/`) with in-page anchors (`#services`, `#projects`, `#process`,
  `#faq`, `#contact`) that are also listed in the sitemap.
- `lang="en-IN"` on `<html>`; Telugu UI strings are marked `lang="te"` where adjacent.

**On-page**
- One `<h1>` ("UR Interiors Studio"), section `<h2>`s, no skipped heading levels.
- Landmarks: `<header>`, `<main id="main">`, `<nav aria-label>`, `<footer>`, `<address>`,
  `<details>/<summary>` FAQ, `<blockquote>` testimonials, `<dl>` contact details.
- Descriptive `alt` text on every image (subject + room + locality + studio), `aria-hidden`
  on decorative SVG/arrow icons.
- Internal linking: hero → portfolio, services → contact, footer → all sections, plus
  floating call/WhatsApp actions.
- Keyword coverage without stuffing: *interior designers in Hyderabad, modular kitchen
  Hyderabad, wardrobe design, false ceiling, 3BHK interior design Hyderabad, villa interior
  designers, turnkey interiors, Jubilee Hills / Kokapet / Gachibowli / Financial District*.

**Structured data** (`lib/schema.ts`, validated against schema.org + Rich Results rules)
- `LocalBusiness` + `HomeAndConstructionBusiness` — NAP, geo coordinates, opening hours,
  `priceRange`, `areaServed` (12 Hyderabad localities), `sameAs`, `aggregateRating`,
  `hasOfferCatalog` with six `Service` offers.
- `WebSite` (name, url, inLanguage, publisher).
- `FAQPage` — five real Q&As, eligible for FAQ rich results.
- Reference implementation: `app/layout.tsx` (single `<script type="application/ld+json">`,
  `<` escaped to `\u003c` to avoid injection).

**Local SEO readiness**
- Consistent NAP block in the footer and the contact panel (same strings as JSON-LD, sourced
  from one file: `lib/site.ts`).
- "Interior design services across Hyderabad" area list, localities used in project captions
  and testimonial metas — natural location signals.
- Google Maps deep link in the schema (`hasMap`).

---

## 3. Accessibility

Target: **WCAG 2.1 AA**. Lighthouse Accessibility 100/100, plus manual checks.

- Colour contrast verified on every text/background pair; the brand clay was darkened from
  `#b9552f` → `#b04f28` (4.35:1 → 4.8:1 on sand) and muted white alphas were raised (the
  form labels, helper text and footer headings were 3.9–4.4:1 before).
- A local *scrim* sits behind the hero video card so the white caption holds AA contrast over
  the light lower part of the gradient — without tinting the whole hero (it also removed a
  visible seam where the old full-hero scrim met the section edge).
- Visible focus rings (`:focus-visible`, 2px, offset 3px), a "Skip to content" link, and
  `aria-expanded` / `aria-controls` on the mobile menu button.
- Language switch uses real `<button aria-pressed>`; the toggle also **stops the hero
  animation from replaying** when the copy changes.
- Video is `muted`, `playsInline`, decorative-level (`tabIndex=-1`) with an `aria-label`;
  chapter bars are 14px-tall buttons with 3px visual bars, labelled "Play chapter n of 4"
  and exposed via `aria-current`.
- `prefers-reduced-motion: reduce` disables every animation and shows final states.
- Works without JavaScript: `<noscript>` un-hides all scroll-revealed content.
- Touch targets ≥ 44px on interactive chrome (hamburger, floating actions, form fields);
  text links rely on Lighthouse's inline-text exception.

---

## 4. Performance work

| Area | What was done |
| --- | --- |
| Fonts | `next/font` self-hosts Playfair Display (400/500), Archivo (400/500), Manrope (400/500) with `display: swap` and preload — zero third-party font requests, no layout shift. Noto Sans Telugu is loaded with `preload: false` and only fetched if Telugu glyphs are actually rendered. |
| Images | All photography re-exported to **WebP** at 2 sizes each (700/1200 for portraits, 900/1500 for the about shot, 900/1200/1500/2000 for the hero), served with explicit `width`/`height` + `srcSet`/`sizes`; hero uses `fetchPriority="high"`, everything else `loading="lazy" decoding="async"`. Total media payload ≈ 2 MB including the film. |
| Video | 14-second 4-chapter film re-encoded from 5.1 MB → **1.45 MB** (H.264 main, 12 fps, `+faststart`, `-an`), poster image 10 KB, `preload="metadata"`. |
| CSS | Tailwind v4 utility layer + ~1 100 lines of component CSS in `@layer components`; single 10 kB stylesheet, no CSS-in-JS, no runtime style injection. |
| JS | 110 kB first-load. Only the header, hero copy, gallery reveal, form and floating actions hydrate — every other section ships as static HTML. |
| Motion | All animation is CSS (transform/opacity/filter) — no animation library, no scroll listeners on the main thread (IntersectionObserver only, unobserved after firing). |
| CLS | 0 in both profiles: fixed aspect ratios on all media, `font-display: swap` with size-adjusted fallbacks, no injected banners. |
| Caching / security headers | `Cache-Control: immutable` for `/media/*`; `nosniff`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, DNS prefetch; `poweredByHeader: false`. |

---

## 5. Issues found during the audit (and fixed)

1. **CSS layering bug** — unlayered custom CSS (`a { color: inherit }`, `.btn-dark`, `.eyebrow`)
   was overriding Tailwind utilities, so "Enquire" links rendered white-on-white and the
   contact CTA lost its white background. Fixed by wrapping the stylesheet in
   `@layer base` / `@layer components` so utilities always win.
2. **Contrast failures** (6 nodes) — brand clay and several white alphas failed 4.5:1.
   Re-tuned tokens; accessibility went 97 → **100**.
3. **Accessible name mismatch** — `aria-label` on project cards did not contain the visible
   caption. Removed the `aria-label` and added an `sr-only` suffix instead.
4. **Hero seam** — the full-hero contrast scrim ended abruptly at the hero boundary, showing a
   faint horizontal band. Replaced with a card-local scrim.
5. **Language toggle replayed the intro** — switching EN→TE re-ran the 2-second word
   animation and left the tagline invisible. `Words` now takes an `animate` flag that turns
   off once the language has been switched.
6. **Headlines too narrow** — `ch` max-widths were applied to wrappers (so they resolved
   against 16px body text) instead of the display headings; section titles wrapped to three
   lines. Moved the constraints onto the `<h2>` elements.
7. **Favicon/LCP-regression guard** — hero LCP animation timings tuned (0.15/0.28/0.4 s,
   0.85 s duration) and the hero image gained a 1200w candidate.
8. **Placeholder contrast** in the blue contact panel raised from 50% → 72% white.
9. **Dev indicator / stale build serving** — `devIndicators: false`, production verified
   against a clean `.next` build before measuring.

---

## 6. Known remaining items (by design or needing your input)

| Item | Detail | Recommendation |
| --- | --- | --- |
| Mobile LCP 3.6 s | The LCP element is the hero H1 word "INTERIORS", which is *by design* invisible until its word-by-word entrance (blur + fade) and is only repainted after hydration under 4× CPU throttling. Desktop is 0.8 s. | Keep the signature animation, or make the H1 fade shorter/disable it for slow connections. One-line switch: add `@media (max-width: 640px) { .hero-h1 .word { animation-delay: 0s !important } }`. |
| Real photography | Images are licensed-for-demo renders/AI comps. | Swap in your own project photos (same file names in `public/media/`) — this is also the single biggest trust/SEO win. |
| `aggregateRating` | Values (4.9 / 240) are placeholders. | Only publish ratings you can evidence; Google may flag self-serving review markup without verification. Update `lib/site.ts` + `lib/schema.ts`. |
| Lead form | Sends via WhatsApp deep link (no backend). | Wire `/api/leads` to email/CRM if you want a database of leads, and add reCAPTCHA/Turnstile if spam appears. |
| Content depth | One page covers all services. | Phase 2: dedicated pages (`/modular-kitchens-hyderabad`, `/interior-designers-jubilee-hills`, …) + 2 project case studies per month — the fastest route to ranking for high-intent local queries. |
| Off-page SEO | Not part of this build. | Google Business Profile (same NAP + photos + weekly posts), 20–30 genuine reviews, citations (Justdial, Sulekha, Houzz, IndiaMART), Instagram → site links. |
| Analytics | None installed (no consent banner needed yet). | Add Vercel Analytics or GA4 via `@next/third-parties` with consent; track call clicks, WhatsApp clicks and form submissions as conversions. |
| Telugu | TE toggle covers nav + hero copy only. | Extend the dictionary in `components/LanguageProvider.tsx`, or create a full `/te` locale with `next-intl` if Telugu traffic justifies it. |

---

## 7. Brief compliance map

| Brief step | Where it lives | Status |
| --- | --- | --- |
| 1 · Fonts & base | `app/layout.tsx`, `app/globals.css` (`@layer base`) | ✅ Playfair/Archivo/Manrope 400+500, body reset, antialiased |
| 2 · Page background | `.page-shell`, `.grid-lines` | ✅ exact gradient stops, 3 radial glows, 4 lines at 4.8/35.45/64.7/95.2%, 1.6 s stagger |
| 3 · Hero section | `.hero`, `.hero-house` | ✅ `min-height: clamp(760px,75vw,1300px)`, parallax rise 4.2 s |
| 4 · Header / nav | `components/SiteHeader.tsx` | ✅ 3-column grid, pill nav, TE/EN switch, outline CTA, mobile dropdown |
| 5 · Headline + tagline | `components/Hero.tsx` + `.hero-h1` / `.hero-tagline` | ✅ 3 lines, Playfair `clamp(40px, 39px+4.9vw, 170px)`, `.87` leading, indents |
| 6 · Explore link | `.hero-explore` | ✅ "Explore our projects" + arrow, clamp sizing |
| 7 · Video card | `components/HeroVideoCard.tsx` | ✅ 4 chapters, never-stop playback, card + bar entrance at 2 s / 2.55 s |
| 8 · Word-by-word `wordIn` | `components/Words.tsx` + `@keyframes wordIn` | ✅ opacity/translate/blur, per-word delays |
| 9 · "Our latest …" section | `components/LatestProjects.tsx` | ✅ underlined 3-line heading, 3 cards, IO at 0.15, sideways snap scroll < 640 px |
| 10 · Responsive | `globals.css` media queries | ✅ verified at 390 / 820 / 1440 px, zero horizontal overflow |

### Deviations from the brief (all deliberate)

- **Content** is interior-design copy for UR Interiors (Hyderabad) instead of "Sabrina
  Residences" real-estate copy, as requested; the second section reads *Our Latest **Spaces***.
- **Hero H1 / tagline timing** starts slightly earlier than the brief (0.15/0.28/0.4 s vs
  0.55/0.75/0.95 s) to pull LCP in; the word-by-word feel is unchanged.
- **Brand clay `#b04f28`** instead of a lighter terracotta, for AA contrast.
- **Scrim behind the video card** (not the whole hero) to keep white captions readable and
  avoid a visible band at the hero boundary.
- **`prefers-reduced-motion`** and a **`<noscript>`** fallback were added — not in the brief,
  required for accessibility.
- Additional sections (stats, about, services, process, portfolio, testimonials, FAQ, contact,
  footer, floating call/WhatsApp) complete the business site.

---

## 8. Content that still needs your sign-off

Placeholders to replace before launch (all in `lib/site.ts` unless noted):
phone/WhatsApp number, email, studio address and pin code, GSTIN, service prices, project
names and localities, testimonial names, social profile URLs, and the aggregate rating.
