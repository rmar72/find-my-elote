import React from "react"
import ReactDOM from "react-dom/client"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import "./index.css"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import ErrorPage from "./pages/error-page"
import { Vendors } from "./features/vendors/Vendors"
import FoodMap from "./features/foodMap/FoodMap"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import { ProtectedRootRoute } from "./routes/ProtectedRootRoute"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      {/* <Route path="/register" element={<RegisterScreen />} /> */}
      <Route path="" element={<ProtectedRootRoute />}>
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/foodMap" element={<FoodMap />} />
      </Route>
    </Route>,
  ),
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
)
