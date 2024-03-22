import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://Kuldik.github.io/dnd-cards',
  plugins: [react()],
})
