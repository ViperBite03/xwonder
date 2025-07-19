// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { fileURLToPath } from 'url'
import path from 'path'

import vue from '@astrojs/vue'

import vercel from '@astrojs/vercel'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), vue()],
  server: {
    port: 4000,
  },
  vite: {
    resolve: {
      alias: {
        '@/': path.resolve(__dirname, 'src') + '/',
      },
    },
  },
  adapter: vercel(),
})
