import axios from "axios"
import { createContext, useContext, useState, useEffect, useMemo } from "react"

type Props = {
  children?: React.ReactNode
}

interface IAuth {
  token: string | null
  setToken: Function
}

const AuthContext = createContext<IAuth>({ token: null, setToken: () => {} })

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [token, setToken_] = useState(localStorage.getItem("user"))

  const setToken = (newToken: any) => {
    setToken_(newToken)
  }

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer" + token
      localStorage.setItem("user", token)
    } else {
      delete axios.defaults.headers.common["Authorization"]
      localStorage.removeItem("user")
    }
  }, [token])

  // Memoized value of the authentication context
  const authContextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token],
  )

  console.log("authContextValue", authContextValue)

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}

// this could be replaced by acutally just doing useContext
// wherever I need it and destructure returning variables
export const useAuthConsumer = () => {
  return useContext(AuthContext)
}

export default AuthProvider
