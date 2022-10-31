import { Middleware } from '@nuxt/types'

const auth: Middleware = ({ store, redirect, Constants }) => {
  if (!store.state.auth.user) {
    redirect(Constants.routePage.HOME)
  }
}

export default auth
