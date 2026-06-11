import { apiClient } from './client.js'

export const loginUser = async (credentials) => {
  const { data } = await apiClient.post('/api/users/login/', credentials, {
    skipAuthRefresh: true,
  })

  return data
}

export const registerUser = async (payload) => {
  const { data } = await apiClient.post('/api/users/register/', payload, {
    skipAuthRefresh: true,
  })

  return data
}

export const fetchCurrentUser = async () => {
  const { data } = await apiClient.get('/api/users/profile/')

  return data
}