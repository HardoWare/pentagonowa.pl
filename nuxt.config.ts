// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Pentagonowa',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Pentagonowa, najlepsze servery FiveM RP FP FRP.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  fonts: {

  },
  image: {
    dir: 'public',
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },
  i18n: {
    // baseUrl: 'pentagonowa.pl',
    defaultLocale: 'pl',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieKey: 'i18n_locale',
      fallbackLocale: 'pl',
      redirectOn: 'all',
    },
    langDir: 'locale',
    lazy: true,
    locales: [
      { "code": "pl", "iso": "pl-PL", "file": "locale.pl.json" },
      { "code": "en", "iso": "en-US", "file": "locale.en.json" },
    ],
    strategy: 'prefix',
  },
  ssr: true,
  ui: {
    global: true,
    safelistColors: [''],
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: '~/tailwindcss.config',
    editorSupport: true // todo DEV

  },
  runtimeConfig: {
  },

  /* DEV */
  devtools: { enabled: true },
  sourcemap: true,
  /* DEV */

  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-ui-pack",
    "@nuxtjs/i18n",
    "@nuxt/fonts"
  ]
})