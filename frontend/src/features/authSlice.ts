import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface User {
  _id: string
  name: string
  email: string
}

interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as any)
    : null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // this only adds the token to our localstorage
    loginAuthHandler: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAuthenticated = true
      localStorage.setItem("user", JSON.stringify(action.payload))
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      localStorage.removeItem("user")
    },
  },
})

export const { loginAuthHandler, logout } = authSlice.actions
export default authSlice.reducer
