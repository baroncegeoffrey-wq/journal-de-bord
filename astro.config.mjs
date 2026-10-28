// @ts-check
import { defineConfig } from 'astro/config';

// Le site vit sous /journal-de-bord/ sur GitHub Pages :
// tous les liens internes passent par import.meta.env.BASE_URL.
export default defineConfig({
  site: 'https://baroncegeoffrey-wq.github.io',
  base: '/journal-de-bord',
  trailingSlash: 'always',
});
