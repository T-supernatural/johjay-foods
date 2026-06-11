import { apiClient } from './client.js'

export const fetchTestimonials = async () => {
  const { data } = await apiClient.get('/api/testimonials/')

  return data
}