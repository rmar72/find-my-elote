import { NavLink } from "react-router-dom"
import Logo from "./Logo"
import avatarImage from "./avatar.jpg"
import "./Header.css"

const Header = (): JSX.Element => {
  const avatarStyles = {
    backgroundImage: `url(${avatarImage})`,
  }

  return (
    <header className="header">
      <nav className="navbar nav">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/vendors"}>Vendors</NavLink>
        <NavLink to={"/foodmap"}>Food Map</NavLink>
        <NavLink to={"/logout"}>Logout</NavLink>
      </nav>
      <p className="header-logo">
        <Logo />
      </p>
      <div className="header-account">
        <p className="header-avatar" style={avatarStyles}>
          {/* <span className="visually-hidden">Ruben Solorio</span> */}
        </p>
      </div>
    </header>
  )
}

export default Header
