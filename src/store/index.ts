import { ActionTree } from 'vuex'

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ dispatch }, { constants, error, $cookies }) {
    const accessToken = $cookies.get(constants.common.ACCESS_TOKEN_KEY)

    try {
      if (accessToken) {
        await dispatch('auth/getUser')
      }
    } catch (_error: any) {
      error({
        statusCode: constants.common.STATUS_CODE.SYSTEM_ERROR,
      })
    }
  },
}
