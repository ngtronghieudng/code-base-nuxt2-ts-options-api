import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import Utils from '@/utils'

Vue.prototype.Utils = Utils

const utils: Plugin = (context) => {
  context.Utils = Utils
}

export default utils
