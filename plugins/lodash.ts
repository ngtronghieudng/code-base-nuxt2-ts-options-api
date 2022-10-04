import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import _ from 'lodash'

Vue.prototype.$_ = _

const lodash: Plugin = (context) => {
  context.$_ = _
}

export default lodash
