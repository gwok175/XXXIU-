const KEY = 'secret_session'

export const sessionStore = {
  isAuthenticated: () => sessionStorage.getItem(KEY) === 'true',
  login: () => sessionStorage.setItem(KEY, 'true'),
  logout: () => sessionStorage.removeItem(KEY),
}
