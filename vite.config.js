import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// INLINE=1 npm run build → incrusta las imágenes en el JS (útil para un HTML de un solo archivo)
export default defineConfig({ plugins: [react()], build: process.env.INLINE ? { assetsInlineLimit: 100000000 } : {} })
