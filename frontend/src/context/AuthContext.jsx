import { useEffect, useMemo, useState } from 'react'
import { fetchCurrentUser, loginUser, registerUser } from '../api/authService.js'
import { clearTokens, getAccessToken, getRefreshToken, setTokens } from '../api/tokenStore.js'
import { AuthContext } from './authContext.js'

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isActive = true

    const hydrateAuth = async () => {
      const accessToken = getAccessToken()
      const refreshToken = getRefreshToken()

      if (!accessToken || !refreshToken) {
        if (isActive) {
          setCurrentUser(null)
          setIsLoading(false)
        }

        return
      }

      try {
        const profile = await fetchCurrentUser()

        if (isActive) {
          setCurrentUser(profile)
        }
      } catch {
        clearTokens()

        if (isActive) {
          setCurrentUser(null)
        }
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    hydrateAuth()

    return () => {
      isActive = false
    }
  }, [])

  const login = async (credentials) => {
    const data = await loginUser(credentials)
    setTokens({ access: data.access, refresh: data.refresh })
    const profile = await fetchCurrentUser()
    setCurrentUser(profile)
    return profile
  }

  const register = async (payload) => {
    const data = await registerUser(payload)
    return data
  }

  const logout = () => {
    clearTokens()
    setCurrentUser(null)
  }

  const value = useMemo(
    () => ({
      currentUser,
      isAuthenticated: Boolean(currentUser),
      isLoading,
      login,
      register,
      logout,
    }),
    [currentUser, isLoading],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}