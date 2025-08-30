import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Add this line to specify static output
  output: 'static',
  // Replace <YOUR_REPOSITORY_NAME> with your actual repository name
  base: '/<the.gallery>/',
});