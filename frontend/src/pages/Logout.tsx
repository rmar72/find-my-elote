import { useNavigate } from "react-router-dom"
import { useAuthConsumer } from "../authProvider"
import { ThreeDots } from "react-loader-spinner"
import "./Logout.css"

const Logout = () => {
  const { setToken } = useAuthConsumer()
  const navigate = useNavigate()

  const handleLogout = () => {
    setToken()
    navigate("/", { replace: true })
  }

  setTimeout(() => {
    handleLogout()
  }, 3 * 1000)

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
