# Images & logo

Site: **Japan-Oceania Young Professionals (JOYP)**.
(See `SPEC.md` for the full placeholder list.)

## ⚠️ All images are PLACEHOLDERS

The photos in `src/assets/photos/` are **generated gradient placeholders**, not
real photography — they exist only so the layout builds and looks finished. The
logo and OG card are simple generated placeholders too. Swap them for real
assets when ready.

## To replace
- **Hero / feature photos:** `src/assets/photos/` — six slots, named by role:
  - `hero-home.jpg` — home hero
  - `hero-programs.jpg` — What We Do hero
  - `hero-events.jpg` — Events + Connection Party hero
  - `hero-join.jpg` — Get Involved hero
  - `hero-contact.jpg` — Contact hero
  - `feature-contact.jpg` — framed photo on the Contact page
  Keep the **same filenames** and the pages pick them up automatically. Any
  orientation is fine — images are cropped with `object-fit: cover`.
- **Logo (circle):** `public/logo.png` — round logo used in nav, footer, favicon.
- **OG / share image:** `public/og.jpg` (1200×630) — branded social card.
- **Founder photo:** `public/members/ryuma.jpg`.
- **Reach numbers** on the home page (`src/pages/index.astro` + `ja`) — edit as
  the community grows.

## Adding an update / activity post
Once JOYP has real activity: drop a photo in `src/assets/updates/` and add an
entry to `src/data/updates.ts` (EN + JA). The "Updates" section on the home pages
appears automatically once that list is non-empty (it's empty now).
