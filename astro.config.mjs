// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO mise en production : remplacer par le domaine définitif.
export default defineConfig({
  site: 'https://www.maisonclovali.fr',
  integrations: [sitemap({ filter: (page) => !page.includes('/merci') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
