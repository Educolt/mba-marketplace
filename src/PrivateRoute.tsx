// src/components/PrivateRoute.tsx
/* import { Navigate, useLocation } from 'react-router-dom' */

interface PrivateRouteProps {
  children: JSX.Element
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  /* const accessToken = localStorage.getItem(
    '@mba-marketplace/accessToken',
  )
  const location = useLocation()

  if (!accessToken) {
    return <Navigate to="/login" replace state={{ from: location }} />
  } */

  return children
}
