// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// @ts-ignore
import mdx from '@astrojs/mdx';
// https://astro.build/config
import partytown from '@astrojs/partytown'
// @ts-ignore
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://astro-article.netlify.app/',
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