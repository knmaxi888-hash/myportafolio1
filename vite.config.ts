import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/myportafolio1/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'remove-crossorigin',
      transformIndexHtml(html) {
        return html
          .replace(/<script([^>]*?)crossorigin/g, '<script$1')
          .replace(/<link([^>]*?)crossorigin([^>]*?)>/g, (match) => {
            if (match.includes('google')) return match
            return match.replace(/ crossorigin/g, '')
          })
      },
    },
  ],
})
