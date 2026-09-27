import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Source lives in /source. `npm run build` writes the finished site to the
// project root: index.html (everything inlined) + images/, cv.pdf, favicon.svg.
// That root index.html opens with a plain double-click — no server needed.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), viteSingleFile()],
  build: {
    outDir: '..',
    emptyOutDir: false,
  },
})
