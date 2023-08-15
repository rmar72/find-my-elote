import React from "react"
import { NavLink } from "react-router-dom"
import "./SideBar.css"

const SideBar: React.FC = () => {
  return (
    <nav className="navbar nav">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/vendors"}>Vendors</NavLink>
      <NavLink to={"/foodmap"}>Food Map</NavLink>
      <NavLink to={"/logout"}>Logout</NavLink>
    </nav>
  )
}

export default SideBar
