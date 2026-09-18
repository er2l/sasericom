// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://saseri.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [starlight({
    title: 'SASERI',
    defaultLocale: 'root',
    locales: { root: { label: 'English', lang: 'en' } },
    pagefind: false,
    markdown: { headingLinks: false },
    sidebar: [],
    tableOfContents: false,
    pagination: false,
    lastUpdated: false,
    favicon: '/brand/favicon_io/favicon.ico',
    customCss: ['./src/styles/global.css'],
    components: {
      Header: './src/components/Header.astro',
      Footer: './src/components/Footer.astro',
      ThemeProvider: './src/components/ThemeProvider.astro',
    },
    head: [
      { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/brand/favicon_io/favicon-16x16.png' } },
      { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/brand/favicon_io/favicon-32x32.png' } },
      { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/brand/favicon_io/apple-touch-icon.png' } },
      { tag: 'link', attrs: { rel: 'manifest', href: '/brand/favicon_io/site.webmanifest' } },
      { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
      { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary' } },
      { tag: 'meta', attrs: { property: 'og:locale', content: 'en_GB' } },
      { tag: 'script', attrs: { type: 'application/ld+json' }, content: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Organization',
        name: 'SASERI', url: 'https://saseri.com', email: 'contact@saseri.com',
      }) },
    ],
  })],
  vite: { plugins: [tailwindcss()] },
});
