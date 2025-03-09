
import "./navbar.css"
import { Link } from "react-router-dom"
import { assets } from "../../assets/assets"
import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="nav-container">
      <Link className="logo-link" to="/">
        <img src={assets.logo_1 || "/placeholder.svg"} alt="Positivus" />
      </Link>

      {/* Hamburger Menu Icon */}
      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

     
      <div className={`navbar-menu ${isMenuOpen ? "show" : ""}`}>
        <div className="nav-item">
          <Link to="/">About Us</Link>
          <Link to="/">Service</Link>
          <Link to="/">Use Cases</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">Blog</Link>
        </div>
        <button className="quote-button">Request a quotes</button>
      </div>
    </nav>
  )
}

export default Navbar

