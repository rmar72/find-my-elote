import { ChangeEvent, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { loginAuthHandler } from "../features/authSlice"
import { useLoginMutation } from "../features/usersApiSlice"
import { ThreeDots } from "react-loader-spinner"

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const origin = location.state?.from?.pathname || "/"

  // const { user } = useAppSelector((state: { auth: any }) => state?.auth)
  const dispatch = useAppDispatch()
  const [login, { isLoading }] = useLoginMutation()

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const submitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    try {
      const res = await login({ email, password }).unwrap()
      dispatch(loginAuthHandler({ ...res }))
      navigate(origin, { replace: true })
    } catch (err) {
      console.error("CATCH ERROR: ", err)
    }
  }

  if (isLoading) {
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

  return (
    <>
      <form>
        <label>Username</label>
        <input
          type="email"
          placeholder="enter username"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="enter password"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.currentTarget.value)
          }
          value={password}
        />
        <button type="submit" onClick={submitHandler}>
          Submit
        </button>
      </form>
    </>
  )
}

export default Login
