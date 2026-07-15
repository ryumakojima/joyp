# Agent notes

See **`CLAUDE.md`** for the project brief and conventions, and **`SPEC.md`** for
full architecture, decisions, placeholders, and known issues. `PHOTOS.md` covers
images and the logo.

Quick reminders:
- JOYP = **Japan-Oceania Young Professionals**. It's about the community, not
  the founder. Short, plain, natural copy (incl. natural Japanese — avoid choppy
  fragments).
- No Tailwind. Plain CSS + tokens in `src/styles/global.css`. Images always
  `object-fit: cover` in a fixed-aspect `.ratio` box.
- **Served from `/joyp`.** Every hand-written internal `href`/`src` must go
  through `withBase()` (`src/config.ts`). `astro:assets` imports auto-prefix.
- Shared settings in `src/config.ts`. Primary CTA → `getSignupUrl()` (never mailto;
  falls back to the Contact page until `signupUrl` is set).
- Don't fabricate stats, events, or a member roster — this is a real pre-launch org.
- `npm run dev` / `npm run build` / `npm run preview`.
