import axios from 'axios'

export const loginApi = async (username: string, password: string) => {
  const response = await axios.post('https://example.api/login', {
    username,
    password
  })
  return response.data
}

// Anti-DRY Pattern: Duplicate login logic for invalid credentials
export const loginApiWithInvalidCredentials = async (username: string, password: string) => {
  const response = await axios.post('https://example.api/login', {
    username,
    password
  })
  // Simulate invalid credentials by returning error
  if (response.data.success) {
    throw new Error('Invalid credentials')
  }
  return response.data
}

// Anti-DRY Pattern: Duplicate login logic specifically for admin
export const loginApiWithAdmin = async () => {
  const response = await axios.post('https://example.api/login', {
    username: 'admin',
    password: 'secret'
  })
  return response.data
}

// Anti-DRY Pattern: Duplicate login logic specifically for regular user
export const loginApiWithUser = async () => {
  const response = await axios.post('https://example.api/login', {
    username: 'user',
    password: 'password'
  })
  return response.data
}

// Anti-DRY Pattern: Duplicate login logic specifically for guest
export const loginApiWithGuest = async () => {
  const response = await axios.post('https://example.api/login', {
    username: 'guest',
    password: 'guest123'
  })
  return response.data
}

// Anti-DRY Pattern: Duplicate login logic with timeout
export const loginApiWithTimeout = async (username: string, password: string) => {
  const response = await axios.post(
    'https://example.api/login',
    {
      username,
      password
    },
    {
      timeout: 5000
    }
  )
  return response.data
}

// Anti-DRY Pattern: Duplicate login logic with retry mechanism
export const loginApiWithRetry = async (username: string, password: string) => {
  try {
    const response = await axios.post('https://example.api/login', {
      username,
      password
    })
    return response.data
  } catch (error) {
    // Retry once
    const response = await axios.post('https://example.api/login', {
      username,
      password
    })
    return response.data
  }
}

// Anti-DRY Pattern: Duplicate login logic with custom headers
export const loginApiWithCustomHeaders = async (username: string, password: string) => {
  const response = await axios.post(
    'https://example.api/login',
    {
      username,
      password
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Custom-Header': 'workshop-refactor'
      }
    }
  )
  return response.data
}

// Anti-DRY Pattern: Duplicate login logic for mobile client
export const loginApiWithMobileClient = async (username: string, password: string) => {
  const response = await axios.post('https://example.api/login', {
    username,
    password,
    client: 'mobile'
  })
  return response.data
}

// Anti-DRY Pattern: Duplicate login logic for web client
export const loginApiWithWebClient = async (username: string, password: string) => {
  const response = await axios.post('https://example.api/login', {
    username,
    password,
    client: 'web'
  })
  return response.data
}

// Anti-DRY Pattern: Duplicate login logic with remember me option
export const loginApiWithRememberMe = async (
  username: string,
  password: string,
  rememberMe: boolean
) => {
  const response = await axios.post('https://example.api/login', {
    username,
    password,
    rememberMe
  })
  return response.data
}
