import { Plugin } from '@nuxt/types'
import Repositories from '@/repositories'

const repositories: Plugin = (_, inject) => {
  inject('repo', Repositories)
}

export default repositories
