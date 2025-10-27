import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/jeatlabs-page/',
  build: {
    outDir: '.',  // Build to root directory
    assetsDir: 'assets',
    sourcemap: false,
    emptyOutDir: false,  // Don't delete source files
  },
})
