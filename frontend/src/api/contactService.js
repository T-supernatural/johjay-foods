import { apiClient } from './client.js'

export const submitContactMessage = async (payload) => {
  const { data } = await apiClient.post('/api/contacts/', payload)

  return data
}