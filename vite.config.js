import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command, isPreview }) => ({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves the site from /roast-my-plant/, so production
  // builds (and `npm run preview`) need that prefix. The dev server stays at the root.
  base: command === 'build' || isPreview ? '/roast-my-plant/' : '/',
}))
