import { createBrowserRouter, Navigate } from 'react-router-dom'
import { sessionStore } from '../store/sessionStore'
import ProtectedRoute from '../components/router/ProtectedRoute'

import Splash from '../pages/Splash'
import SecretAccess from '../pages/SecretAccess'
import Contacts from '../pages/Contacts'
import Chat from '../pages/Chat'

function RootGuard() {
  return sessionStore.isAuthenticated()
    ? <Navigate to="/contacts" replace />
    : <Navigate to="/access" replace />
}

export const router = createBrowserRouter([
  { path: '/', element: <RootGuard /> },
  { path: '/splash', element: <Splash /> },
  { path: '/access', element: <SecretAccess /> },
  {
    path: '/contacts',
    element: <ProtectedRoute><Contacts /></ProtectedRoute>,
  },
  {
    path: '/chat/:contactId',
    element: <ProtectedRoute><Chat /></ProtectedRoute>,
  },
])
