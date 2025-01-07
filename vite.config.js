import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure the app is served from the root
  build: {
    outDir: 'dist', // Output directory for the build
    sourcemap: true, // Enable source maps for debugging
  },
  server: {
    port: 3000, // Local development port
  },
})
