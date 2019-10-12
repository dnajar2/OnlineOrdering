import { ApiRequest } from '../library/api'

export default async ({ Vue }) => {
  Vue.prototype.$ApiRequest = (url, method, data) => {
    return ApiRequest(url, method, data)
  }
}
