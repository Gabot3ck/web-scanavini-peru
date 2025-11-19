// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.scanavini.pe',
  integrations: [
    tailwind(),
    sitemap()
  ],
  // En Astro 5, las imágenes se optimizan automáticamente
  image: {
    domains: ['https://storage.scanavini.cl'],
  },
  build: {
    assets: 'assets'
  },
  output: 'static', // Para sitio estático
  vite: {
    optimizeDeps: {
      // include: ['gsap']
    }
  }
});
