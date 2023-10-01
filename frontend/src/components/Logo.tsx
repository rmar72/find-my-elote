import React from "react"
import EloteIcon from "../assets/eloteIcon.png"

const Logo: React.FC = () => {
  return (
    <span className="logo">
      <img src={EloteIcon} height="35" width="35" alt="Corn Snack Icon" />
    </span>
  )
}

export default Logo
