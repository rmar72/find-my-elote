import { Outlet } from "react-router-dom"
import "./App.css"
import SideBar from "./components/SideBar"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="container">
      <Header />
      <SideBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
