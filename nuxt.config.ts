// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   modules: [
      '@nuxt/ui',
      'nuxt-icon',
      '@nuxtjs/color-mode',
      '@nuxtjs/eslint-module',
      '@nuxtjs/html-validator',
      [
         '@nuxtjs/google-fonts',
         {
            families: {
               'Open Sans': true
            }
         }
      ]
   ],
   css: ['/assets/css/main.css'],
   app: {
      head: {
         charset: 'utf-8',
         viewport: 'width=device-width, initial-scale=1',
         htmlAttrs: {
            lang: 'ru'
         }
      }
   }
})
