# JOYP — Japan-Oceania Young Professionals

Bilingual (EN / 日本語) Astro static site for **Japan-Oceania Young
Professionals**, a pre-launch community connecting young people in Japan with the
Oceanian community — through networking, culture, and sport.

**Live:** https://ryumakojima.github.io/joyp/ · **Docs:** `CLAUDE.md`,
`SPEC.md`, `DEPLOY.md`, `PHOTOS.md`.

Cloned from the sister project **JAYP** (Japan-Africa) and re-themed.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Local dev server at `localhost:4321/joyp/` |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview the build locally                   |

## Notes

- Served from the `/joyp` subpath (`base` in `astro.config.mjs`). All internal
  links go through `withBase()` in `src/config.ts`.
- EN pages at root, JA mirrored under `/ja`.
- Images in `src/assets/photos/` and the logo are **placeholders** — see `PHOTOS.md`.
- Deploys automatically to GitHub Pages on push to `main`.
