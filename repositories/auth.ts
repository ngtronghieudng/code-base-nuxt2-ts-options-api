import { $axios, ApiResponse } from '@/utils/axios'
import {
  LoginEntity,
  LogoutEntity,
  UserEntity
} from '@/entities/auth'
import RouteApi from '@/constants/route-api'
import {
  ILogin,
  ILogout
} from '@/models/auth'

const me = () =>
  $axios.get(RouteApi.AUTH.ME) as Promise<ApiResponse<UserEntity>>

const login = (payload: ILogin) =>
  $axios.post(RouteApi.AUTH.LOGIN, payload) as Promise<ApiResponse<LoginEntity>>

const logout = (payload: ILogout): Promise<ApiResponse<LogoutEntity>> =>
  $axios.post(RouteApi.AUTH.LOGOUT, payload)

export type IRepoAuth = {
  me: () => Promise<ApiResponse<UserEntity>>
  login: (payload: ILogin) => Promise<ApiResponse<LoginEntity>>
  logout: (payload: ILogout) => Promise<ApiResponse<LogoutEntity>>
}

const auth: IRepoAuth = {
  me,
  login,
  logout,
}

export default auth
