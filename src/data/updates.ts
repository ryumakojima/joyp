// ─────────────────────────────────────────────────────────────
// Activity feed ("Updates / 活動報告") — mirrors LinkedIn posts as cards.
//
// TO ADD A POST (≈2 min):
//   1. Drop the photo into  src/assets/updates/   (any .jpg/.png/.webp).
//   2. Add ONE entry to the top of the `updates` array below
//      (newest first). Fill EN + JA text, the date, the image
//      FILENAME, and paste the LinkedIn post URL.
// That's it — commit & push, the site rebuilds and shows it.
// ─────────────────────────────────────────────────────────────
import type { ImageMetadata } from 'astro';

// Auto-loads every image in src/assets/updates/ so entries below only
// need to reference a filename string (no per-image import line).
const images = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/updates/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}',
  { eager: true }
);

export function resolveUpdateImage(file: string): ImageMetadata {
  const hit = images[`../assets/updates/${file}`];
  if (!hit) {
    throw new Error(
      `[updates] image not found: src/assets/updates/${file} — check the filename in src/data/updates.ts`
    );
  }
  return hit.default;
}

export interface Update {
  date: string; // shown on the card, format 'YYYY.MM.DD'
  image: string; // filename inside src/assets/updates/
  url?: string; // link to the LinkedIn post (optional; '' hides the link)
  alt?: string; // image alt text (falls back to the title)
  en: { title: string; body: string };
  ja: { title: string; body: string };
}

// Newest first. Empty until JOYP has real activity to show — the "Updates"
// section on the home pages hides itself while this list is empty.
export const updates: Update[] = [];
