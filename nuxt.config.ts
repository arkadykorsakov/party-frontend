// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   modules: [
      '@nuxt/ui',
      'nuxt-icon',
      '@nuxtjs/color-mode',
      '@nuxtjs/eslint-module',
      [
         '@nuxtjs/google-fonts',
         {
            families: {
               'Open Sans': true
            }
         }
      ]
   ],
   css: ['/assets/css/main.css']
})
