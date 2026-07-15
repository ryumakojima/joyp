// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ⚠️ EDIT BEFORE DEPLOYING: the canonical absolute URL of the site.
  // Used for <link rel="canonical">, sitemap, and Open Graph URLs.
  // Examples:
  //   custom domain      -> 'https://japanafricayouth.org'
  //   user/org pages      -> 'https://USERNAME.github.io'
  //   project repo (path) -> 'https://USERNAME.github.io' + set `base: '/REPO'`
  site: 'https://ryumakojima.github.io',
  base: '/joyp', // project repo → served at ryumakojima.github.io/joyp/

  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ja: 'ja' },
      },
    }),
  ],
});
