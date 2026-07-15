// ─────────────────────────────────────────────────────────────
// Central site config — edit these in ONE place.
// (See also `site` + `base` in astro.config.mjs. The site is served from a
//  project subpath, so ALL internal links/assets go through `withBase()`.)
// ─────────────────────────────────────────────────────────────

// Base path the site is served under (e.g. '/joyp'). Astro exposes this as
// BASE_URL with a trailing slash ('/joyp/'); we strip it so withBase('/x')
// gives '/joyp/x'. At the domain root it becomes '' and everything still works.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-absolute path with the site base. Leaves URLs/anchors alone. */
export function withBase(path: string): string {
  if (!path || path[0] !== '/') return path; // external URL, mailto, #anchor, etc.
  return BASE + path;
}

export const siteConfig = {
  name: 'Japan-Oceania Young Professionals',
  nameJa: '日本・オセアニア ヤングプロフェッショナルズ',
  shortName: 'JOYP',
  // One-page brief (PDF). Empty = the download button is hidden.
  // Drop a file in public/downloads/ and set its path here to show it.
  onePageBriefUrl: '',
  aliases: [
    'Japan Oceania Young Professionals',
    'Japan-Oceania Youth Community',
    'Oceanian community in Japan',
    '日本 オセアニア 交流',
    '日本とオセアニアの交流コミュニティ',
    '在日 オセアニア コミュニティ',
  ],

  // Community sign-up form — joining JOYP, NOT an event registration.
  // Per-locale Google Forms (EN / 日本語). This is both the primary CTA
  // target ("Get an invite" / 案内を受け取る) and the email/invite-list form.
  // Leave '' until the real forms exist — getSignupUrl() then falls back to the
  // Contact page so every CTA still goes somewhere sensible.
  signupUrl: {
    en: '',
    ja: '',
  },

  // Google Search Console verification token (the meta-tag method).
  // In Search Console → Add property → "HTML tag", copy ONLY the value of the
  // content="..." attribute here. This proves ownership so you can submit the
  // sitemap and request indexing. Leave '' to render no tag.
  googleSiteVerification: '',

  // Org contact channels. Leave '' to hide a social link.
  email: '', // optional fallback only (mailto is unreliable, kept minimal)
  instagram: '', // e.g. 'https://instagram.com/your_handle'
  x: '', // e.g. 'https://x.com/your_handle'

  // Founder's personal homepage (shown on the Members page).
  founder: {
    name: 'Ryuma Kojima',
    nameJa: '小島 龍馬',
    blurb: 'Builder — robotics, AI & linguistics.',
    blurbJa: 'ロボティクス・AI・言語の作り手。',
    url: 'https://ryumacv.neocities.org/',
    photo: '/members/ryuma.jpg',
  },
} as const;

export function localizedPath(path: string, locale: 'en' | 'ja') {
  if (!path.startsWith('/') || path.startsWith('/ja') || locale === 'en') return path;
  return `/ja${path}`;
}

// The join/invite CTA. Falls back to the Contact page until real forms exist.
export function getSignupUrl(locale: 'en' | 'ja') {
  const url = siteConfig.signupUrl[locale];
  if (url) return url;
  return withBase(locale === 'ja' ? '/ja/contact' : '/contact');
}

// The join/invite-list form is the same community sign-up form.
export function getEmailListFormUrl(locale: 'en' | 'ja') {
  return getSignupUrl(locale);
}
