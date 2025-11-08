import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://1nky3.github.io/the.gallery',
  base: isProd ? '/the.gallery/' : '/', // ✅ dev works at /
});
