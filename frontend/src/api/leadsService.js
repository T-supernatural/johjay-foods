import { apiClient } from './client.js'

export const submitLeadRequest = async (payload) => {
  const { data } = await apiClient.post('/api/leads/', payload)

  return data
}