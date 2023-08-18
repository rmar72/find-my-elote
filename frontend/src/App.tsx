import React from "react"
import { Outlet } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
