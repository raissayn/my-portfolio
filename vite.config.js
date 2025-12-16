import { defineConfig } from 'vite' // Mantenha apenas uma importação de defineConfig
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Mantenha apenas uma importação de tailwindcss

// https://vitejs.dev/config/
export default defineConfig({ // Mantenha apenas UM export default
    plugins: [
        react(),
        tailwindcss(), // Inclua o plugin do Tailwind aqui
    ],
})