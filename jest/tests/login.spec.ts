import '@/support/mockApi/mockApi'
import {
  loginApi,
  loginApiWithInvalidCredentials,
  loginApiWithAdmin,
  loginApiWithUser,
  loginApiWithGuest,
  loginApiWithTimeout,
  loginApiWithRetry,
  loginApiWithCustomHeaders,
  loginApiWithMobileClient,
  loginApiWithWebClient,
  loginApiWithRememberMe
} from '@/support/api/loginApi'

// Anti-DRY Pattern: Duplicate test structure for admin function
describe('loginApiWithAdmin', () => {
  it('returns token and userId for hardcoded admin', async () => {
    const result = await loginApiWithAdmin()
    expect(result.token).toBe('mocked-token')
    expect(result.userId).toBe(1)
    expect(result).toHaveProperty('token')
    expect(result).toHaveProperty('userId')
    expect(typeof result.token).toBe('string')
    expect(typeof result.userId).toBe('number')
  })
})

// Anti-DRY Pattern: Duplicate test structure for user function
describe('loginApiWithUser', () => {
  it('returns token and userId for hardcoded user', async () => {
    const result = await loginApiWithUser()
    expect(result.token).toBe('mocked-token')
    expect(result.userId).toBe(1)
    expect(result).toHaveProperty('token')
    expect(result).toHaveProperty('userId')
    expect(typeof result.token).toBe('string')
    expect(typeof result.userId).toBe('number')
  })
})

// Anti-DRY Pattern: Duplicate test structure for guest function
describe('loginApiWithGuest', () => {
  it('returns token and userId for hardcoded guest', async () => {
    const result = await loginApiWithGuest()
    expect(result.token).toBe('mocked-token')
    expect(result.userId).toBe(1)
    expect(result).toHaveProperty('token')
    expect(result).toHaveProperty('userId')
    expect(typeof result.token).toBe('string')
    expect(typeof result.userId).toBe('number')
  })
})

// Anti-DRY Pattern: Duplicate test structure for timeout function
describe('loginApiWithTimeout', () => {
  it('returns token and userId with timeout', async () => {
    const result = await loginApiWithTimeout('admin', 'secret')
    expect(result.token).toBe('mocked-token')
    expect(result.userId).toBe(1)
  })

  it('returns error when login fails with timeout', async () => {
    const result = await loginApiWithTimeout('admin', 'wrongpass')
    expect(result.message).toBe('Invalid credentials')
  })

  it('returns error when username is missing with timeout', async () => {
    const result = await loginApiWithTimeout('', 'password')
    expect(result.message).toBe('Missing credentials')
  })
})

// Anti-DRY Pattern: Duplicate test structure for retry function
describe('loginApiWithRetry', () => {
  it('returns token and userId with retry', async () => {
    const result = await loginApiWithRetry('admin', 'secret')
    expect(result.token).toBe('mocked-token')
    expect(result.userId).toBe(1)
  })

  it('returns error when login fails with retry', async () => {
    const result = await loginApiWithRetry('admin', 'wrongpass')
    expect(result.message).toBe('Invalid credentials')
  })

  it('returns error when username is missing with retry', async () => {
    const result = await loginApiWithRetry('', 'password')
    expect(result.message).toBe('Missing credentials')
  })
})

// Anti-DRY Pattern: Duplicate test structure for custom headers function
describe('loginApiWithCustomHeaders', () => {
  it('returns token and userId with custom headers', async () => {
    const result = await loginApiWithCustomHeaders('admin', 'secret')
    expect(result.token).toBe('mocked-token')
    expect(result.userId).toBe(1)
  })

  it('returns error when login fails with custom headers', async () => {
    const result = await loginApiWithCustomHeaders('admin', 'wrongpass')
    expect(result.message).toBe('Invalid credentials')
  })

  it('returns error when username is missing with custom headers', async () => {
    const result = await loginApiWithCustomHeaders('', 'password')
    expect(result.message).toBe('Missing credentials')
  })
})

// Anti-DRY Pattern: Duplicate test structure for mobile client function
describe('loginApiWithMobileClient', () => {
  it('returns token and userId for mobile client', async () => {
    const result = await loginApiWithMobileClient('admin', 'secret')
    expect(result.token).toBe('mocked-token')
    expect(result.userId).toBe(1)
  })

  it('returns error when login fails for mobile client', async () => {
    const result = await loginApiWithMobileClient('admin', 'wrongpass')
    expect(result.message).toBe('Invalid credentials')
  })

  it('returns error when username is missing for mobile client', async () => {
    const result = await loginApiWithMobileClient('', 'password')
    expect(result.message).toBe('Missing credentials')
  })
})

// Anti-DRY Pattern: Duplicate test structure for web client function
describe('loginApiWithWebClient', () => {
  it('returns token and userId for web client', async () => {
    const result = await loginApiWithWebClient('admin', 'secret')
    expect(result.token).toBe('mocked-token')
    expect(result.userId).toBe(1)
  })

  it('returns error when login fails for web client', async () => {
    const result = await loginApiWithWebClient('admin', 'wrongpass')
    expect(result.message).toBe('Invalid credentials')
  })

  it('returns error when username is missing for web client', async () => {
    const result = await loginApiWithWebClient('', 'password')
    expect(result.message).toBe('Missing credentials')
  })
})

// Anti-DRY Pattern: Duplicate test structure for remember me function
describe('loginApiWithRememberMe', () => {
  it('returns token and userId with remember me true', async () => {
    const result = await loginApiWithRememberMe('admin', 'secret', true)
    expect(result.token).toBe('mocked-token')
    expect(result.userId).toBe(1)
  })

  it('returns token and userId with remember me false', async () => {
    const result = await loginApiWithRememberMe('admin', 'secret', false)
    expect(result.token).toBe('mocked-token')
    expect(result.userId).toBe(1)
  })

  it('returns error when login fails with remember me', async () => {
    const result = await loginApiWithRememberMe('admin', 'wrongpass', true)
    expect(result.message).toBe('Invalid credentials')
  })

  it('returns error when username is missing with remember me', async () => {
    const result = await loginApiWithRememberMe('', 'password', true)
    expect(result.message).toBe('Missing credentials')
  })
})
