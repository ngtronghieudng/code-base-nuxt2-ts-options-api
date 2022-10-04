import colors from 'vuetify/es5/util/colors'
import fs from 'fs'
import path from 'path'
import Constants from './constants'

const locales = fs
  .readdirSync(path.join(__dirname, 'locales'))
  .map((file) => file.replace(/\.json/, ''))

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - base-nuxt2-ts-options-api',
    title: 'base-nuxt2-ts-options-api',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/constants',
    '@/plugins/utils',
    '@/plugins/lodash',
    '@/plugins/locales',
    '@/plugins/store',
    '@/plugins/repositories',
    '@/plugins/vue-debounce',
    '@/plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components/common', extensions: ['vue'] }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    'cookie-universal-nuxt',
  ],

  moment: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  i18n: {
    locales: locales.map((locale) => ({
      code: locale,
      file: `${locale}.json`,
    })),
    defaultLocale: process.env.NUXT_APP_LOCALE || Constants.common.LOCALE,
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: process.env.NUXT_APP_LOCALE || Constants.common.LOCALE,
    },
    baseUrl: '/',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: process.env.NUXT_APP_LOCALE || Constants.common.LOCALE,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.NUXT_APP_BASE_URL,
  },

  // Config style resource
  styleResources: {
    scss: [
      '~/assets/styles/base/mixins.scss',
      '~/assets/styles/base/colors.scss',
    ],
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles/base/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
