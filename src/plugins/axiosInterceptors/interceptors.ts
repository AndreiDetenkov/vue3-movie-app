import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { API_KEY, BASE_URL } from '@/utils/config'

axios.defaults.baseURL = BASE_URL

export default function setup() {
  axios.interceptors.request.use(
    function (config: AxiosRequestConfig) {
      console.log(config)
      config.params = { ...config.params, api_key: API_KEY }
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  axios.interceptors.response.use(
    function (response: AxiosResponse) {
      return response
    },
    async function (error) {
      return Promise.reject(error)
    }
  )
}
