
import "./Header.css"
import { Link } from "react-router-dom"
import { assets } from "../../assets/assets"

const Header = () => {
    return (
        <div className="Header">
            <div className="header-content-left">
                <h1>Navigating the digital landscape for success</h1>
                <div className="mobile-illustration">
                    <Link>
                        <img src={assets.header} />
                    </Link>
                </div>
                <p>
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including
                    SEO, PPC, social media marketing, and content creation.
                </p>
                <button>Book a consultation</button>
            </div>
            <div className="header-content-right">
                <Link>
                    <img src={assets.header} />
                </Link>
            </div>
        </div>
    )
}

export default Header

