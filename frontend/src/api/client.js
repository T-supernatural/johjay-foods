import axios from 'axios'
import { clearTokens, getAccessToken, getRefreshToken, setTokens } from './tokenStore.js'

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'

export const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const refreshClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use((config) => {
  const accessToken = getAccessToken()

  if (accessToken) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    const status = error.response?.status
    const shouldSkipRefresh = originalRequest?.skipAuthRefresh || originalRequest?.url?.includes('/api/users/login/') || originalRequest?.url?.includes('/api/users/register/') || originalRequest?.url?.includes('/api/users/token/refresh/')

    if (status === 401 && !originalRequest?._retry && !shouldSkipRefresh) {
      const refreshToken = getRefreshToken()

      if (!refreshToken) {
        clearTokens()
        return Promise.reject(error)
      }

      originalRequest._retry = true

      try {
        const refreshResponse = await refreshClient.post('/api/users/token/refresh/', {
          refresh: refreshToken,
        })

        const nextAccessToken = refreshResponse.data?.access

        if (!nextAccessToken) {
          clearTokens()
          return Promise.reject(error)
        }

        setTokens({ access: nextAccessToken })
        originalRequest.headers = originalRequest.headers || {}
        originalRequest.headers.Authorization = `Bearer ${nextAccessToken}`

        return apiClient(originalRequest)
      } catch (refreshError) {
        clearTokens()
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  },
)