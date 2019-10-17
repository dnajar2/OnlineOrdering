import axios from 'axios'
let baseUrl = 'http://127.0.0.1/api/v1/'

export function ApiRequest (endpoint, method, data) {
  return new Promise(async (resolve, reject) => {
    try {
      method = !method ? 'get' : method
      const url = baseUrl + endpoint
      const response = await axios({ method, url, data })
      resolve(response.data)
    } catch (err) {
      console.log(err)
      reject(err)
    }
  })
}

/**
 * @return {string}
 */
export function Endpoint (...args) {
  return baseUrl + args.join('/')
}
