import { Plugin } from '@nuxt/types'
import { initializeStore } from '@/utils/store'

const storePlugin: Plugin = ({ store }) => {
  initializeStore(store)
}

export default storePlugin
