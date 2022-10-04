module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:@intlify/vue-i18n/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'import/named': 'off',
    'import/no-mutable-exports': 'off',
  },
}
