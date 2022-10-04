import auth, { IRepoAuth } from '@/repositories/auth'

export type IRepositories = {
  auth: IRepoAuth
}

const repositories: IRepositories = {
  auth,
}

export default repositories
