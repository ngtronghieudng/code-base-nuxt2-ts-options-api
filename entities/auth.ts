
export interface UserEntity {
  id: number
  userId: string
  fullName: string
  emails: string[]
}

export interface LogoutEntity {
  detail: string
}

export interface LoginEntity {
  accessToken: string
  refreshToken: string
}

export interface ForgotPasswordEntity {}

export interface ResetPasswordEntity {}

export interface ValidateTokenEntity {}
