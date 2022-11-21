import { ActionTree } from 'vuex'

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ dispatch }, { Constants, error, $cookies }) {
    const accessToken = $cookies.get(Constants.common.ACCESS_TOKEN_KEY)

    try {
      if (accessToken) {
        await dispatch('auth/getUser')
      }
    } catch (_error: any) {
      // const { response } = _error
      // const isSystemError =
      //   response?.status === Constants.common.STATUS_CODE.SYSTEM_ERROR
      // const isUnAuthorized =
      //   response?.status === Constants.common.STATUS_CODE.UNAUTHORIZED

      // // TODO: remove case isSystemError
      // if ((isSystemError || isUnAuthorized) && accessToken) {
      //   $cookies.remove(Constants.common.ACCESS_TOKEN_KEY)
      // }

      error({
        statusCode: Constants.common.STATUS_CODE.SYSTEM_ERROR,
      })
    }
  },
}
