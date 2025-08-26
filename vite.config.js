import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 4000, // Change to your preferred port (e.g., 8080, 5000, etc.)
    open: true, // Optional: Automatically open browser
    historyApiFallback: true,
  },
})
