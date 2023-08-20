import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAppSelector } from "../app/hooks"

export const ProtectedRoute = () => {
  const location = useLocation()

  const { user: userAuthenticated } = useAppSelector(
    (state: { auth: any }) => state?.auth,
  )

  return userAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  )
}
