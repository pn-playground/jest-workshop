import axios from 'axios'

export const getOrderApi = async (orderId: number, token?: string) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {}

  const response = await axios.get(`https://example.api/orders/${orderId}`, { headers })
  return response.data
}

export const createOrderApi = async (
  userId: number,
  items: string[],
  total: number,
  paymentMethod: 'cash' | 'credit_card' | 'paypal',
  token?: string
) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {}

  const response = await axios.post(
    'https://example.api/order',
    {
      userId,
      items,
      total,
      paymentMethod
    },
    { headers }
  )
  return response.data
}

export const createOrderWithCash = async (
  userId: number,
  items: string[],
  total: number,
  token?: string
) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {}

  const response = await axios.post(
    'https://example.api/order',
    {
      userId,
      items,
      total,
      paymentMethod: 'cash'
    },
    { headers }
  )
  return response.data
}

export const createOrderWithCreditCard = async (
  userId: number,
  items: string[],
  total: number,
  token?: string
) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {}

  const response = await axios.post(
    'https://example.api/order',
    {
      userId,
      items,
      total,
      paymentMethod: 'credit_card'
    },
    { headers }
  )
  return response.data
}

export const createOrderWithPaypal = async (
  userId: number,
  items: string[],
  total: number,
  token?: string
) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {}

  const response = await axios.post(
    'https://example.api/order',
    {
      userId,
      items,
      total,
      paymentMethod: 'paypal'
    },
    { headers }
  )
  return response.data
}
