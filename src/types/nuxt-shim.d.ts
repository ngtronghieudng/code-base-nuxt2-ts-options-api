import { NuxtCookies } from 'cookie-universal-nuxt'
import { LoDashStatic } from 'lodash'
import { IConstants } from '@/constants'
import { IUtils } from '@/utils'
import { IRepositories } from '@/repositories'

declare module 'vue/types/vue' {
  interface Vue {
    Constants: IConstants
    Utils: IUtils
    $cookies: NuxtCookies
    $_: LoDashStatic
    $repo: IRepositories
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    Constants: IConstants
    Utils: IUtils
    $cookies: NuxtCookies
    $_: LoDashStatic
    $repo: IRepositories
  }
}

declare module '@nuxt/types' {
  interface Context {
    Constants: IConstants
    Utils: IUtils
    $cookies: NuxtCookies
    $_: LoDashStatic
    $repo: IRepositories
  }
}
