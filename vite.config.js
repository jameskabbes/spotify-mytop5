import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

function getBase(){
  if (process.env.JAMESKABBES_DEV == 'true'){
    return ''
  } else {
    return '/spotify/'
  }  
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  base: getBase(), 
  plugins: [react(), tailwindcss('./tailwind.config.js')],
})

