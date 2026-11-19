import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://victormmatthews.me',
  base: '/', // root user page — NO subpath
  output: 'static',
  integrations: [sitemap()],
});
