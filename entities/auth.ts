
export interface IPermissionUser {
  id: number
  code: string
  name: string
  isActive: boolean
}

export interface UserEntity {
  id: number
  userId: string
  fullName: string
  emails: string[]
  permissions: IPermissionUser[]
}

export interface LogoutEntity {
  detail: string
}

export interface LoginEntity {
  accessToken: string
  refreshToken: string
}
