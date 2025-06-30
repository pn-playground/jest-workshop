export { loginApi } from '@/support/api/loginApi'
export { createOrderApi } from '@/support/api/orderApi'
export { getOrderApi } from '@/support/api/orderApi'
export { getUserApi } from '@/support/api/userApi'

// Anti-DRY Pattern Exports
export { createOrderWithCash } from '@/support/api/orderApi'
export { createOrderWithCreditCard } from '@/support/api/orderApi'
export { createOrderWithPaypal } from '@/support/api/orderApi'

// Anti-DRY Pattern Login API Exports
export {
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
