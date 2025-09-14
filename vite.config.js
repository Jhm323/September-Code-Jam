import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/cleaning-challenge-generator/',
    plugins: [react()],
    server: {
        port: 3000,
    }
})
