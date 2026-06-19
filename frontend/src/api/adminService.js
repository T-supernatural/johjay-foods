import { apiClient } from './client.js'

export const fetchAdminLeads = async () => {
  const { data } = await apiClient.get('/api/leads/')
  return data
}

export const updateLeadStatus = async (leadId, status) => {
  const { data } = await apiClient.patch(`/api/leads/${leadId}/`, { status })
  return data
}

export const fetchAdminMessages = async () => {
  const { data } = await apiClient.get('/api/contacts/')
  return data
}

export const updateMessageStatus = async (messageId, status) => {
  const { data } = await apiClient.patch(`/api/contacts/${messageId}/`, { status })
  return data
}
