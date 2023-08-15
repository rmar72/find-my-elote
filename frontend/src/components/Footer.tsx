import React from "react"
import Container from "./Container"
import "./Footer.css"
import EloteIcon from "./eloteIcon.png"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <p>
          <img src={EloteIcon} height="25" width="25" alt="Corn Snack Icon" />
          &copy; {new Date().getFullYear()}, Find My Elote{" "}
        </p>
      </Container>
    </footer>
  )
}

export default Footer
