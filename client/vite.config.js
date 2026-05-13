import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // autoriser l'acc-s au conteneur client
  server: {
    allowedHosts: ["client"],
  }
})
