import "./navbar.css"
import { Link } from 'react-router-dom'; // Import Link
import { assets } from "../../assets/assets";
const Navbar = () => {
    return (
        <nav className=" flex items-center justify-between p-[10px]">
            <Link className="flex items-center gap-[40px]" to="/">
                <img src={assets.logo_1} />
            </Link>
            <div className="navbar-menu">
                <div className="nav-item ">
                    <Link to="/">About Us</Link>
                    <Link to="/">Service</Link>
                    <Link to="/">Use Cases</Link>
                    <Link to="/">Pricing</Link>
                    <Link to="/">Blog</Link>
                </div>
                <button className="  border-[1px] border-solid border-[#191A23] rounded-[14px] border-[1px] border-solid border-[var(--Dark,#191A23)] px-[35px] py-[20px] text-base font-medium bg-transparent cursor-pointer" >
                    Request a quotes
                </button>
            </div>
        </nav>
    )
}

export default Navbar