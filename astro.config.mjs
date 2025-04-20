// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import partytown from '@astrojs/partytown'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://yumm-a.netlify.app/',
  integrations: [partytown()],
});