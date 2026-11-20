import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://victormatthews.github.io',
  output: 'static',
  integrations: [sitemap()],
});
