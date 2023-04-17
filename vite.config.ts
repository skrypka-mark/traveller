import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: /@\/components\/((?!.*[.](ts|js|tsx|jsx|vue)$).*$)/,
        replacement: fileURLToPath(
            new URL("./src/components/$1/index.vue", import.meta.url)
        ),
      },
      {
        find: /@\/components\/((?!.*[.](ts|js|tsx|jsx|vue)$).*$)/,
        replacement: fileURLToPath(
            new URL("./src/components/$1/$2/index.vue", import.meta.url)
        ),
      }
    ],
    extensions: ['*', '.js', '.vue', '.ts', '.json']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@/assets/mixins.scss';
          @import '@/assets/base.scss';
          @import '@/assets/main.scss';
        `
      }
    }
  }
})
