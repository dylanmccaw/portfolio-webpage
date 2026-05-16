import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Since you're using a custom domain (dylan.software)
  build: {
    cssCodeSplit: false, // Bundle all CSS together
    minify: true
  }
})