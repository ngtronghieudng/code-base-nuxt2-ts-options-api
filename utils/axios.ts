import { NuxtAxiosInstance } from '@nuxtjs/axios'

export type ApiResponse<T = any> = T

let $axios: NuxtAxiosInstance

export const initializeAxios = (axiosInstance: NuxtAxiosInstance) => {
  $axios = axiosInstance
}

export { $axios }
