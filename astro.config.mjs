import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import icon from 'astro-icon';

export default defineConfig({
  integrations: [tailwind(), react(), icon()],
  output: 'static',
  build: {
    assets: 'assets',
    assetsPrefix: './',
    format: 'file'
  },
  server: {
    host: true,
    port: 4321,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '0afe-240e-3ba-30ea-8e60-a1f8-1835-58fa-6013.ngrok-free.app'
    ]
  }
});