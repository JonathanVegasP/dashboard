import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VitePWA({
      base: '/dashboard/dist/',
      registerType: 'autoUpdate',
      manifest: {
        name: 'Dashboard',
        short_name: 'Dashboard',
        description: 'Dashboard',
        background_color: '#000000',
        theme_color: '#000000',
        lang: 'pt-BR',
        categories: ['Dashboard']
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/dashboard/dist/'
})
