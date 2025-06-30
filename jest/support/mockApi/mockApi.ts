import axios, { HttpStatusCode } from 'axios'

jest.mock('axios')
;(axios.post as jest.MockedFunction<typeof axios.post>).mockImplementation(
  async (url: string, body: any, config?: any) => {
    if (url.includes('login')) {
      return mockLoginApi(body)
    }

    if (url.includes('/order')) {
      return mockCreateOrderApi(body, config?.headers)
    }

    return {
      status: HttpStatusCode.NotFound,
      data: { message: 'Unknown endpoint' }
    }
  }
)
;(axios.get as jest.MockedFunction<typeof axios.get>).mockImplementation(
  async (url: string, config?: any) => {
    if (url.includes('/users/')) {
      return mockUsersApi(url, config?.headers)
    }

    if (url.includes('/orders/')) {
      return mockOrdersApi(url, config?.headers)
    }

    return {
      status: HttpStatusCode.NotFound,
      data: { message: 'Unknown endpoint' }
    }
  }
)

function mockLoginApi(body: any) {
  const { username, password } = body

  // Handle admin login
  if (username === 'admin' && password === 'secret') {
    return {
      status: HttpStatusCode.Ok,
      data: { userId: 1, token: 'mocked-token' }
    }
  }

  // Handle regular user login
  if (username === 'user' && password === 'password') {
    return {
      status: HttpStatusCode.Ok,
      data: { userId: 1, token: 'mocked-token' }
    }
  }

  // Handle guest login
  if (username === 'guest' && password === 'guest123') {
    return {
      status: HttpStatusCode.Ok,
      data: { userId: 1, token: 'mocked-token' }
    }
  }

  if (username && password) {
    return {
      status: HttpStatusCode.Unauthorized,
      data: { message: 'Invalid credentials' }
    }
  }

  return {
    status: HttpStatusCode.Unauthorized,
    data: { message: 'Missing credentials' }
  }
}

function mockUsersApi(url: string, headers?: any) {
  // Check for authentication token
  if (!headers?.Authorization || !headers.Authorization.startsWith('Bearer ')) {
    return {
      status: HttpStatusCode.Unauthorized,
      data: { message: 'Authentication required' }
    }
  }

  const token = headers.Authorization.replace('Bearer ', '')
  if (token !== 'mocked-token') {
    return {
      status: HttpStatusCode.Unauthorized,
      data: { message: 'Invalid token' }
    }
  }

  const id = parseInt(url.split('/').pop() || '0', 10)

  if (!id) {
    return {
      status: HttpStatusCode.NotFound,
      data: { message: 'Cannot find user' }
    }
  }

  return {
    status: HttpStatusCode.Ok,
    data: { userId: id }
  }
}

function mockOrdersApi(url: string, headers?: any) {
  // Check for authentication token
  if (!headers?.Authorization || !headers.Authorization.startsWith('Bearer ')) {
    return {
      status: HttpStatusCode.Unauthorized,
      data: { message: 'Authentication required' }
    }
  }

  const token = headers.Authorization.replace('Bearer ', '')
  if (token !== 'mocked-token') {
    return {
      status: HttpStatusCode.Unauthorized,
      data: { message: 'Invalid token' }
    }
  }

  const orderId = parseInt(url.split('/').pop() || '0', 10)

  if (!orderId) {
    return {
      status: HttpStatusCode.NotFound,
      data: { message: 'Cannot find order' }
    }
  }

  return {
    status: HttpStatusCode.Ok,
    data: {
      orderId: orderId,
      userId: 1,
      items: ['item1', 'item2'],
      total: 99.99,
      status: 'completed'
    }
  }
}

function mockCreateOrderApi(body: any, headers?: any) {
  // Check for authentication token
  if (!headers?.Authorization || !headers.Authorization.startsWith('Bearer ')) {
    return {
      status: HttpStatusCode.Unauthorized,
      data: { message: 'Authentication required' }
    }
  }

  const token = headers.Authorization.replace('Bearer ', '')
  if (token !== 'mocked-token') {
    return {
      status: HttpStatusCode.Unauthorized,
      data: { message: 'Invalid token' }
    }
  }

  const { userId, items, total, paymentMethod } = body

  if (!userId || !items || !total) {
    return {
      status: HttpStatusCode.BadRequest,
      data: { message: 'Missing required fields: userId, items, total' }
    }
  }

  // Validate payment method
  const validPaymentMethods = ['cash', 'credit_card', 'paypal']
  if (!paymentMethod) {
    return {
      status: HttpStatusCode.BadRequest,
      data: { message: 'Payment method is required' }
    }
  }

  if (!validPaymentMethods.includes(paymentMethod)) {
    return {
      status: HttpStatusCode.BadRequest,
      data: { message: 'Invalid payment method. Supported methods: cash, credit_card, paypal' }
    }
  }

  // Simulate different processing for different payment methods
  let paymentStatus = 'pending'
  let processingFee = 0

  switch (paymentMethod) {
    case 'cash':
      paymentStatus = 'confirmed'
      processingFee = 0
      break
    case 'credit_card':
      paymentStatus = 'processing'
      processingFee = total * 0.029 // 2.9% fee
      break
    case 'paypal':
      paymentStatus = 'processing'
      processingFee = total * 0.034 // 3.4% fee
      break
  }

  const orderId = Math.floor(Math.random() * 10000) + 1

  return {
    status: HttpStatusCode.Created,
    data: {
      orderId: orderId,
      userId: userId,
      items: items,
      total: total,
      paymentMethod: paymentMethod,
      paymentStatus: paymentStatus,
      processingFee: Math.round(processingFee * 100) / 100,
      finalAmount: Math.round((total + processingFee) * 100) / 100,
      status: 'pending',
      createdAt: new Date().toISOString()
    }
  }
}
