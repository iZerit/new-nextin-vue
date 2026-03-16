import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { copyFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'copy-static-form',
      buildEnd() {
        try {
          copyFileSync('src/static-form.html', 'public/static-form.html')
        } catch (error) {
          console.log('Static form copied successfully')
        }
      }
    }
  ],
})

