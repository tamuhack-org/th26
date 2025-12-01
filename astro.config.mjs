// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Stack Sans Text",
        cssVariable: "--font-stack-sans",
        weights: [400, 500, 600, 700],
        styles: ["normal"]
      },
      {
        provider: fontProviders.fontsource(),
        name: "BBH Sans Hegarty",
        cssVariable: "--font-bbh-sans",
        display: "block"
      }
    ]
  },
  vite: {
    plugins: [tailwindcss()]
  }
});