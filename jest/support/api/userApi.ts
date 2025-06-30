import axios from 'axios'

export const getUserApi = async (userId: number, token?: string) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {}

  const response = await axios.get(`https://example.api/users/${userId}`, { headers })
  return response.data
}
