import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'docx-mime-type',
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        if (request.url?.toLowerCase().endsWith('.docx')) response.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
        next()
      })
    },
  }],
  server: {
    proxy: {
      '/api': 'http://localhost:8787',
    },
  },
})
