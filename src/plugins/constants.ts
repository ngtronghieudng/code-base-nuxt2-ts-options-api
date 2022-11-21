import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import Constants from '@/constants'

Vue.prototype.Constants = Constants

const constants: Plugin = (context) => {
  context.Constants = Constants
}

export default constants
