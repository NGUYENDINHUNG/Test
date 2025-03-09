import { assets } from "../../../assets/assets"
import "./Foolter.css"
import { Link } from "react-router-dom"
const Foolter = () => {
    return (
        <div className="foolter">
            <div className="foolter_item_menu">
                <Link>
                    <img src={assets.Logo_Foolter} className="foolter_logo" />
                </Link>
                <ul className="foolter_menu">
                    <a>About Us</a>
                    <a>Service</a>
                    <a>User Case</a>
                    <a> Pricing </a>
                    <a>Blog</a>
                </ul>
                <div className="foolter_right">
                    <img src={assets.foolterIcon1} />
                    <img src={assets.foolterIcon2} />
                    <img src={assets.foolterIcon3} />
                </div>

            </div>
            <div className="foolter_content">
                <div className="foolter_content_left">
                    <div className="foolter_heading">
                        <h4>Contact Us:</h4>
                    </div>
                    <div className="foolter_info">
                        <p>Email: info@positivus.com</p>
                        <p>Phone: 555-567-8901</p>
                        <p>Address: 1234 Main St <br />
                            Moonstone City, Stardust State 12345</p>
                    </div>

                </div>
                <div className="foolter_content_right">

                    <input type="text" placeholder="Email" className="foolter_field" />
                    <div className="foolter_button"><p>Subscribe to news</p></div>
                </div>
            </div>
            <hr className="line"></hr>


            <div className="text">
                <span> <p>© 2023 Positivus. All Rights Reserved.</p></span>
                <span> <p>Privacy Policy</p></span>

            </div>

        </div>
    )
}

export default Foolter