import { ChangeEvent, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import { loginAuthHandler } from "../features/authSlice"
import { useLoginMutation } from "../features/usersApiSlice"
import { ThreeDots } from "react-loader-spinner"
import Paper from "@mui/material/Paper"
import FormControl from "@mui/material/FormControl"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const origin = location.state?.from?.pathname || "/"

  // const { user } = useAppSelector((state: { auth: any }) => state?.auth)
  const dispatch = useAppDispatch()
  const [login, { isLoading }] = useLoginMutation() // this one actually makes the LOGIN aPI call

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const submitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    try {
      const res = await login({ email, password }).unwrap()
      dispatch(loginAuthHandler({ ...res })) // this only adds the token to our localstorage
      navigate(origin, { replace: true })
    } catch (err) {
      console.error("CATCH ERROR: ", err)
    }
  }

  if (isLoading) {
    return (
      <Paper
        elevation={10}
        sx={{
          mt: 12,
          mb: 1.5,
          bgcolor: "customPalette.white.main",
          height: 175,
          width: 350,
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#0288d1"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
      </Paper>
    )
  }

  return (
    <Paper
      elevation={10}
      sx={{
        mt: 4,
        mb: 1.5,
        mx: "auto",
        bgcolor: "customPalette.white.main",
        height: 350,
        width: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form>
        <Stack direction={{ xs: "column", md: "row" }} sx={{ p: 2 }}>
          <FormControl sx={{ mr: 2 }}>
            <TextField
              label="Email"
              color="primary"
              type="email"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              required
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{
                mb: 3,
                "input:-webkit-autofill, input:-webkit-autofill:focus": {
                  transition: "background-color 0s 600000s, color 0s 600000s",
                },
              }}
              value={email}
            />
          </FormControl>

          <FormControl sx={{ mr: 2 }}>
            <TextField
              label="Password"
              color="primary"
              type="password"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.currentTarget.value)
              }
              required
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              sx={{
                // width: "100%",
                mb: 4,
                "input:-webkit-autofill, input:-webkit-autofill:focus": {
                  transition: "background-color 0s 600000s, color 0s 600000s",
                },
              }}
              fullWidth
              value={password}
            />
          </FormControl>

          <FormControl sx={{ mr: 2 }}>
            <Button
              variant="outlined"
              type="submit"
              onClick={submitHandler}
              sx={{
                height: "57px",
                width: { sm: "100%", md: "140px" },
                bgcolor: "primary.main",
                color: "customPalette.white.main",
                "&:hover": { color: "primary.main" },
              }}
            >
              Submit
            </Button>
          </FormControl>
        </Stack>
      </form>
    </Paper>
  )
}

export default Login
