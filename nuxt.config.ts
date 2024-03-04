// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-quasar-ui',
    'nuxt-obfuscator'
  ],
  obfuscator: {
    dev: true, // if true, class names will be obfuscated in development
  },
})
