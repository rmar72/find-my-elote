import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import { logout } from "../features/authSlice"
import { ThreeDots } from "react-loader-spinner"
import "./Logout.css"

const Logout = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logout())
      navigate("/login", { replace: true })
    }, 500)
  }

  useEffect(() => {
    handleLogout()

    return () => {
      clearTimeout(handleLogout as any)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="section-wrapper">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  )
}

export default Logout
