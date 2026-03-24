import { sessionStore } from '../store/sessionStore'

const VALID_CODE = '0000'

export function useAccess() {
  function loginWithCode(code) {
    if (code === VALID_CODE) {
      sessionStore.login()
      return true
    }
    return false
  }

  return {
    isAuthenticated: sessionStore.isAuthenticated(),
    loginWithCode,
    logout: sessionStore.logout,
  }
}
