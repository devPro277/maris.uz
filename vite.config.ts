import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Mana shu plagin majburiy!
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tailwind plaginini shu yerga qo'shamiz
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})