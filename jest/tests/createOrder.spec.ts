import '@/support/mockApi/mockApi'
import {
  loginApiWithAdmin,
  loginApiWithUser,
  loginApiWithTimeout,
  loginApiWithCustomHeaders
} from '@/support/api/loginApi'
import {
  createOrderWithCash,
  createOrderWithCreditCard,
  createOrderWithPaypal
} from '@/support/api'

describe('Create Order - Admin Login', () => {
  let validToken: string
  let userId: number

  beforeEach(async () => {
    const loginResult = await loginApiWithAdmin()
    validToken = loginResult.token
    userId = loginResult.userId
  })

  it('creates cash order', async () => {
    const result = await createOrderWithCash(userId, ['coffee', 'donut'], 12.5, validToken)

    expect(result.orderId).toBeGreaterThan(0)
    expect(result.paymentMethod).toBe('cash')
    expect(result.paymentStatus).toBe('confirmed')
    expect(result.processingFee).toBe(0)
    expect(result.finalAmount).toBe(12.5)
  })

  it('creates credit card order', async () => {
    const result = await createOrderWithCreditCard(userId, ['laptop'], 999.99, validToken)

    expect(result.orderId).toBeGreaterThan(0)
    expect(result.paymentMethod).toBe('credit_card')
    expect(result.paymentStatus).toBe('processing')
    expect(result.processingFee).toBe(29.0) // 2.9% of 999.99
    expect(result.finalAmount).toBe(1028.99)
  })

  it('creates paypal order', async () => {
    const result = await createOrderWithPaypal(userId, ['headphones'], 199.99, validToken)

    expect(result.orderId).toBeGreaterThan(0)
    expect(result.paymentMethod).toBe('paypal')
    expect(result.paymentStatus).toBe('processing')
    expect(result.processingFee).toBe(6.8) // 3.4% of 199.99
    expect(result.finalAmount).toBe(206.79)
  })
})

describe('Create Order - User Login', () => {
  let validToken: string
  let userId: number

  beforeEach(async () => {
    const loginResult = await loginApiWithUser()
    validToken = loginResult.token
    userId = loginResult.userId
  })

  it('creates cash order with user login', async () => {
    const result = await createOrderWithCash(userId, ['coffee', 'donut'], 12.5, validToken)

    expect(result.orderId).toBeGreaterThan(0)
    expect(result.paymentMethod).toBe('cash')
    expect(result.paymentStatus).toBe('confirmed')
    expect(result.processingFee).toBe(0)
    expect(result.finalAmount).toBe(12.5)
  })

  it('creates credit card order with user login', async () => {
    const result = await createOrderWithCreditCard(userId, ['laptop'], 999.99, validToken)

    expect(result.orderId).toBeGreaterThan(0)
    expect(result.paymentMethod).toBe('credit_card')
    expect(result.paymentStatus).toBe('processing')
    expect(result.processingFee).toBe(29.0) // 2.9% of 999.99
    expect(result.finalAmount).toBe(1028.99)
  })
})

describe('Create Order - Timeout Login', () => {
  let validToken: string
  let userId: number

  beforeEach(async () => {
    const loginResult = await loginApiWithTimeout('admin', 'secret')
    validToken = loginResult.token
    userId = loginResult.userId
  })

  it('creates paypal order with timeout login', async () => {
    const result = await createOrderWithPaypal(userId, ['headphones'], 199.99, validToken)

    expect(result.orderId).toBeGreaterThan(0)
    expect(result.paymentMethod).toBe('paypal')
    expect(result.paymentStatus).toBe('processing')
    expect(result.processingFee).toBe(6.8) // 3.4% of 199.99
    expect(result.finalAmount).toBe(206.79)
  })
})

describe('Create Order - Custom Headers Login', () => {
  let validToken: string
  let userId: number

  beforeEach(async () => {
    const loginResult = await loginApiWithCustomHeaders('admin', 'secret')
    validToken = loginResult.token
    userId = loginResult.userId
  })

  it('creates cash order with custom headers login', async () => {
    const result = await createOrderWithCash(userId, ['tea', 'cake'], 8.5, validToken)

    expect(result.orderId).toBeGreaterThan(0)
    expect(result.paymentMethod).toBe('cash')
    expect(result.paymentStatus).toBe('confirmed')
    expect(result.processingFee).toBe(0)
    expect(result.finalAmount).toBe(8.5)
  })

  it('creates credit card order with custom headers login', async () => {
    const result = await createOrderWithCreditCard(userId, ['phone'], 699.99, validToken)

    expect(result.orderId).toBeGreaterThan(0)
    expect(result.paymentMethod).toBe('credit_card')
    expect(result.paymentStatus).toBe('processing')
    expect(result.processingFee).toBe(20.3) // 2.9% of 699.99
    expect(result.finalAmount).toBe(720.29)
  })

  it('creates paypal order with custom headers login', async () => {
    const result = await createOrderWithPaypal(userId, ['mouse'], 49.99, validToken)

    expect(result.orderId).toBeGreaterThan(0)
    expect(result.paymentMethod).toBe('paypal')
    expect(result.paymentStatus).toBe('processing')
    expect(result.processingFee).toBe(1.7) // 3.4% of 49.99
    expect(result.finalAmount).toBe(51.69)
  })
})
