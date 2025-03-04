import "./navbar.css"
import { Link } from 'react-router-dom'; // Import Link
import { assets } from "../../assets/assets";
const Navbar = () => {
    return (
        <nav className="navigation-bar">
            <Link className="logo" to="/">
                <img src={assets.logo_1} />
            </Link>
            <div className="navbar-menu">
                <div className="nav-item">
                    <Link to="/">About Us</Link>
                    <Link to="/">Service</Link>
                    <Link to="/">Use Cases</Link>
                    <Link to="/">Pricing</Link>
                    <Link to="/">Blog</Link>
                </div>

                <button className="navbar-button" >
                    Request a quotes
                </button>
            </div>
        </nav>
    )
}

export default Navbar