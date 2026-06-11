export const getApiErrorMessage = (error, fallbackMessage = 'Something went wrong. Please try again.') => {
  const responseData = error?.response?.data

  if (!responseData) {
    return error?.message || fallbackMessage
  }

  if (typeof responseData === 'string') {
    return responseData
  }

  if (responseData.detail) {
    return responseData.detail
  }

  const firstValue = Object.values(responseData).flat().find(Boolean)

  if (typeof firstValue === 'string') {
    return firstValue
  }

  return fallbackMessage
}