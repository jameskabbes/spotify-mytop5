import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  base: '/spotify-mytop5', 
  plugins: [react(), tailwindcss('./tailwind.config.js')],
})

