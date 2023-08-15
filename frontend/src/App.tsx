import AuthProvider from "./authProvider"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Routes from "./routes"
import "./App.css"

function App() {
  const router = createBrowserRouter(Routes())

  return (
    <div className="container" style={{ border: "1px solid cyan" }}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  )
}

export default App
