import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({}),
    vue(),
    Components({
      extensions: ['vue'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/],
      resolvers: [
        IconsResolver(),
      ],
    }),
    vueJsx(),
    vueDevTools(),
    UnoCss(),
    Icons({
      defaultClass: 'inline',
      defaultStyle: 'vertical-align: sub;',
    }),
    AutoImport({ 
      imports: [
        'vue',
        'vue-router'
      ], 
    }),

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
