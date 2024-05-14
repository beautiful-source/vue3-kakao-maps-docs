// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@ant-design-vue/nuxt', '@nuxtjs/color-mode', '@nuxt/image', '@nuxt/content'],
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/main.scss" as *;'
        }
      }
    },
    server: {
      proxy: {
        '/download/web/data': {
          target: 'https://apis.map.kakao.com',
          secure: false,
          changeOrigin: true
        }
      }
    }
  },
  plugins: [{ src: '~/plugins/vue3-kakao-maps', mode: 'client' }],
  components: [
    {
      path: '~/components/common',
      extensions: ['.vue']
    },
    {
      path: '~/components',
      extensions: ['.vue']
    }
  ],
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        'dark-mode': 'github-dark',
        'sepia-mode': 'monokai'
      }
    }
  }
});
