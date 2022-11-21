export interface ILogin {
  userId: string
  password: string
}

export interface ILogout {
  accessToken: string
  refreshToken: string
}