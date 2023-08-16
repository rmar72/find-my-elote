import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import Footer from "../components/Footer"

export const ProtectedRootRoute = () => {
  const { user: userAuthenticated } = useAppSelector(
    (state: { auth: any }) => state?.auth,
  )

  if (!userAuthenticated) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
      <Footer />
    </>
  )
}
