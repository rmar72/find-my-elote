import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../app/hooks"

export const ProtectedRootRoute = () => {
  const { user: userAuthenticated } = useAppSelector(
    (state: { auth: any }) => state?.auth,
  )

  return userAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
