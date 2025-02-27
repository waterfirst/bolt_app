import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/bolt_app/', // 저장소 이름 추가
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
