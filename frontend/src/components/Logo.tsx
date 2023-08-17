import React from "react"
import EloteIcon from "./eloteIcon.png"

const Logo: React.FC = () => {
  return (
    <span className="logo">
      <img src={EloteIcon} height="25" width="25" alt="Corn Snack Icon" />
      Find My Elote
    </span>
  )
}

export default Logo
