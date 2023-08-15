import { Navigate, Outlet } from "react-router-dom"
// import { useAuthConsumer } from "../authProvider"
import { useAppSelector } from "../app/hooks"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import Footer from "../components/Footer"

export const ProtectedRootRoute = () => {
  // const { token } = useAuthConsumer()

  const { user } = useAppSelector((state: { auth: any }) => state?.auth)

  // Check if the user is authenticated
  if (!user) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />
  }

  // If authenticated, render the child routes
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
      <Footer />
    </>
  )
}
