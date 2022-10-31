import { Plugin } from '@nuxt/types'
import { initializeAxios } from '@/utils/axios'

const axios: Plugin = ({
  $axios,
  Utils,
  $_,
  store,
  redirect,
  app,
  $cookies,
  Constants,
}) => {
  $axios.onRequest((config) => {
    const accessToken = $cookies.get(Constants.common.ACCESS_TOKEN_KEY)

    config.headers['Accept-Language'] = 'ja-JP'

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    if (!$_.isEmpty(config.data)) {
      config.data = Utils.helper.toSnakeCase(config.data)
    }

    if (!$_.isEmpty(config.params)) {
      config.params = Utils.helper.toSnakeCase(config.params)
    }
  })

  $axios.onResponse((response) => {
    return Utils.helper.toCamelCase(response.data)
  })

  $axios.onError((error) => {
    const { response } = error
    const currentRoute = app.router?.currentRoute.path

    if (
      currentRoute !== Constants.routePage.HOME &&
      response?.status === Constants.common.STATUS_CODE.UNAUTHORIZED
    ) {
      store.dispatch('auth/logout')

      redirect({
        path: Constants.routePage.HOME,
        query: { redirect: `${currentRoute}` },
      })
    }

    return Promise.reject(error)
  })

  initializeAxios($axios)
}

export default axios
