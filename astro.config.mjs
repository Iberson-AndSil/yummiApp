// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
// https://astro.build/config
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://yumm-a.netlify.app/',
    integrations: [
        mdx(), 
        sitemap(),
        partytown({
            config: {
              forward: ["dataLayer.push"],
            },
        }),
    ],
});