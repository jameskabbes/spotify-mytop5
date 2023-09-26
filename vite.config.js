import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function getBase(){
  if (process.env.JAMESKABBES_DEV == 'true'){
    return ''
  } else {
    return '/spotify/'
  }  
}

// https://vitejs.dev/config/
export default defineConfig({
  base: getBase(), 
  plugins: [react()],
})

