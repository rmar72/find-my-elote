import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
// import usersReducer from "../features/users/usersSlice"
import vendorsReducer from "../features/vendors/vendorsSlice"
import authReducer from "../features/authSlice"
import { apiSlice } from "../features/apiSlice"

export const store = configureStore({
  reducer: {
    // users: usersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    vendors: vendorsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
