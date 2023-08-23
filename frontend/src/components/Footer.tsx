// import "./Footer.css"
import EloteIcon from "./eloteIcon.png"

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <p className="footer-text">
        <img src={EloteIcon} height="25" width="25" alt="Corn Snack Icon" />
        &copy; {new Date().getFullYear()}, Find My Elote{" "}
      </p>
    </footer>
  )
}

export default Footer
