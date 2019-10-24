import axios from 'axios'
import { SessionStorage } from 'quasar'

export default async ({ Vue }) => {
  axios.interceptors.request.use(async (request) => {
    let token = SessionStorage.getItem('token')
    if (token) {

      request.headers.common['Authorization'] = 'Bearer ' + token
    }

    return request
  })

  Vue.prototype.$http = axios
}
