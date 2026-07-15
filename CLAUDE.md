# Japan-Oceania Young Professionals (JOYP) — site

Bilingual (EN / 日本語) Astro static site for **Japan-Oceania Young
Professionals (JOYP)** — a community connecting young people in Japan with the
Oceanian community living in Japan, via networking, culture, and sport.
Pre-launch (founded 2026; first event "Japan–Oceania Connection Party",
around November 2026). Deploys to GitHub Pages as a **project site** at
`ryumakojima.github.io/joyp/`.

This site was cloned from the sister project **JAYP** (Japan-Africa) and
re-themed; the structure, components, and design system are shared.

**Read `SPEC.md` first** — full architecture, decisions, placeholders, and known
issues. `PHOTOS.md` covers images/logo.

## Voice & framing (important)
- It's about the **community**, not the founder. Don't center anyone's personal
  story. (Founder appears only as one entry on the Members page.)
- Audience is broad: **all Oceanian countries**, and anyone in Japan into
  Oceanian culture/language/business/exchange. **Not students-only** —
  include young professionals, grads, entrepreneurs, and Oceanian
  residents in Japan.
- Copy = **short, plain, natural**. Avoid marketing-ish / "AI" lines. Write
  natural Japanese (flowing sentences, not choppy 「〜。〜でも、〜。」 fragments).

## Conventions
- No Tailwind / no UI kit. Plain CSS + tokens in `src/styles/global.css`.
- Fonts: Cinzel (labels), Noto Serif JP (headings), Noto Sans JP (body).
- Images **always** `object-fit: cover` inside a fixed-aspect `.ratio` box — never
  let portrait/landscape distort.
- EN pages at root, JA mirrored under `/ja` with identical slugs.
- **Base path:** the site is served from `/joyp`, so every internal link/asset
  goes through **`withBase()`** in `src/config.ts` (e.g. `withBase('/contact')`).
  `astro:assets` image imports are auto-prefixed; hand-written `href`/`src` are
  NOT — always wrap them. Change the subpath in ONE place: `base` in
  `astro.config.mjs` (`import.meta.env.BASE_URL` drives `withBase`).
- About stays in the nav, but links back to Home. There is no standalone About page.
- Body copy lives in each page file; only nav/footer chrome is in `src/i18n/ui.ts`.
- Shared, editable settings (sign-up link, socials, founder) live in `src/config.ts`.
- Primary CTA is "Get an invite / 案内を受け取る" → `getSignupUrl()`. While
  `signupUrl` is empty it falls back to the Contact page. **Do not use mailto for
  the primary CTA** (founder reports it doesn't work).

## Deployment
**Live at https://ryumakojima.github.io/joyp/** (GitHub Pages **project** site,
repo `ryumakojima/joyp`, account `ryumakojima`). **Auto-deploy:** every push to
`main` runs `.github/workflows/deploy.yml` (Astro action, Node 22) which builds
and publishes via `actions/deploy-pages`. Pages **Source** = **GitHub Actions**.
So: commit/push to `main` → live in ~1–2 min. `public/.nojekyll` stays. `site` +
`base` in `astro.config.mjs` drive canonical/OG/sitemap. See **`DEPLOY.md`**.

## Dev
`npm run dev` (port 4321) · `npm run build` · `npm run preview`.
