import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Routes from "./routes"
import "./App.css"

function App() {
  const router = createBrowserRouter(Routes())

  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
