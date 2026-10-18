import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bancodeprueba.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Las páginas en borrador no entran en el sitemap.
      filter: (page) => !page.includes('/borradores/'),
    }),
  ],
});
