import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // Served from GitHub Pages at macshivadi.github.io/aketa-demo/ (akeru.app now hosted on Heroku).
  base: '/aketa-demo/',
  plugins: [vue()],
  server: { port: 5173 },
  preview: { port: 4173 },
})
