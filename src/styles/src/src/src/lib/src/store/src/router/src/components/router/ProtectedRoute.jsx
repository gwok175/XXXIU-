import { Navigate } from 'react-router-dom'
import { sessionStore } from '../../store/sessionStore'

export default function ProtectedRoute({ children }) {
  return sessionStore.isAuthenticated()
    ? children
    : <Navigate to="/access" replace />
}
