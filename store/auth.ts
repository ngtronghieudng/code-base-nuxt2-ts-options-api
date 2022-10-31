import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { UserEntity } from '@/entities/auth'
import CONSTANTS from '@/constants'

interface StateProps {
  user: UserEntity | null
  accessToken: string | null
  refreshToken: string | null
}

export const state = (): StateProps => ({
  user: null,
  accessToken: null,
  refreshToken: null,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_USER(_state, value: UserEntity) {
    _state.user = value
  },
  SET_ACCESS_TOKEN(_state, value: string) {
    _state.accessToken = value
  },
  SET_REFRESH_TOKEN(_state, value: string) {
    _state.refreshToken = value
  },
  LOGOUT(_state) {
    _state.accessToken = null
    _state.refreshToken = null
    _state.user = null
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async getUser({ commit }) {
    const response = await this.$repo.auth.me()

    if (response) {
      commit('SET_USER', response)
      commit(
        'SET_ACCESS_TOKEN',
        this.$cookies.get(CONSTANTS.common.ACCESS_TOKEN_KEY)
      )
      commit(
        'SET_REFRESH_TOKEN',
        this.$cookies.get(CONSTANTS.common.REFRESH_TOKEN_KEY)
      )
    }
  },
  logout({ commit }) {
    commit('LOGOUT')
    this.$cookies.remove(CONSTANTS.common.ACCESS_TOKEN_KEY)
    this.$cookies.remove(CONSTANTS.common.REFRESH_TOKEN_KEY)
  },
}

export const getters: GetterTree<RootState, RootState> = {
  getPermission(_state) {
    return _state?.user?.permissions?.map((element) => element.code) || []
  },
}
