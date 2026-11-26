import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  server: {
    allowedHosts: [
        "variety-ensuring-binding-generator.trycloudflare.com",
        "arthritis-archived-wanting-estimation.trycloudflare.com"
    ]
}
})