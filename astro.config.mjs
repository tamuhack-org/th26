// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
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
      },
      {
        provider: fontProviders.fontsource(),
        name: "Libre Franklin",
        cssVariable: "--font-libre-franklin",
        weights: [600,900],
        fallbacks: ["sans-serif"],
        styles: ["normal"],
      },
    ]
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()]
});
