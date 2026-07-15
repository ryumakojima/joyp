# Deploy

**Live:** https://ryumakojima.github.io/joyp/
**Repo (source + auto-deploy):** https://github.com/ryumakojima/joyp

This repo holds the **source code** (Astro). Every push to the `main` branch
triggers a GitHub Actions workflow that builds the site and publishes it to
GitHub Pages automatically. **You don't build or deploy by hand.**

This is a **project site**, so it's served from a subpath: `/joyp/`. That is set
by `base: '/joyp'` in `astro.config.mjs`. All internal links go through
`withBase()` (`src/config.ts`) so they keep working under the subpath.

## How it works

- Source lives on `main`.
- `.github/workflows/deploy.yml` runs on every push to `main`:
  builds with the Astro action (Node 22), then deploys via `actions/deploy-pages`.
- GitHub Pages **Source** must be set to **GitHub Actions** (Settings → Pages).
- Goes live ~1–2 min after the Action finishes (green check in the **Actions** tab).

## Editing the site (no PC / no terminal needed)

**Small text change, right in the browser:**
1. Open the repo on GitHub and find the file (see the map below).
2. Click the ✏️ pencil → edit → **Commit changes**.
3. Wait ~1–2 min; the **Actions** tab shows progress, then it's live.

**Bigger edits with a full editor in the browser:**
- Press `.` (period) on the repo to open **github.dev** (VS Code in the browser), or
- Open a **Codespace** (Code ▸ Codespaces) for a full environment with live preview.

### Where the content lives (edit these, NOT the built HTML)

| What you want to change | File |
|---|---|
| Home page | `src/pages/index.astro` (JA: `src/pages/ja/index.astro`) |
| Other pages | `src/pages/<name>.astro` — `programs`, `events`, `members`, `get-involved`, `contact`, `connection-party` |
| Japanese mirror | `src/pages/ja/<name>.astro` (note: `members` is English-only — no JA page) |
| Shared header/footer/hero etc. | `src/components/*.astro` |
| Nav / footer wording | `src/i18n/ui.ts` |
| Sign-up form links, founder, socials, GSC token | `src/config.ts` |
| Design (colors, spacing, fonts) | `src/styles/global.css` |

For SEO, new pages, or design changes, ask Claude — it edits the same source.

## If a deploy fails

Open the **Actions** tab → click the failed run → read the red step. Common cause:
the build errors out (fix the source and push again). The site keeps serving the
last good version until a new deploy succeeds.

## Before changing the URL / domain

- To move to a **custom domain**: set `site` to the domain and remove/adjust
  `base` in `astro.config.mjs`, update `public/robots.txt`, add a `CNAME` file,
  then push. Canonical URLs, Open Graph, and the sitemap all derive from
  `site` + `base`.
- Keep `public/.nojekyll`.
