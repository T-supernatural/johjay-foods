import { apiClient } from './client.js'

export const fetchGalleryItems = async () => {
  const { data } = await apiClient.get('/api/gallery/')

  return data
}