import { ChangeEvent, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthConsumer } from "../authProvider"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { loginAuthHandler } from "../features/authSlice"
import { useLoginMutation } from "../features/usersApiSlice"

const Login = () => {
  const { setToken } = useAuthConsumer()
  const navigate = useNavigate()

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  // const handleLogin = () => {
  //   setToken("this is a test token")
  //   navigate("/", { replace: true })
  // }

  const [login, { isLoading }] = useLoginMutation()

  const { user } = useAppSelector((state: { auth: any }) => state?.auth)
  console.log("user auth state", user)

  useEffect(() => {
    if (user) {
      // navigate("/")
      console.log(" did user change?!", user)
    }
  }, [user])

  const dispatch = useAppDispatch()

  // const handleLogin = () => {
  //   // const user = { _id: 1, username: 'exampleuser' }
  //   dispatch(login(user))
  // }

  // if user changes
  // useEffect(() => {
  //   if (user) {
  //     navigate("/")
  //   }
  // }, [navigate, user])

  // submit
  const submitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log("submitHandler CALLED")
    try {
      console.log("WE TRYING")

      const res = await login({ email, password }).unwrap()
      console.log("res", res)
      dispatch(loginAuthHandler({ ...res }))
      navigate("/", { replace: true })
    } catch (err) {
      console.error("myERROR", err)
    }
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
