import "./CardItem.css";
import { assets } from "../../assets/assets";

const CardItem = ({ name, avarta, position, title }) => {
    return (
        <div className="container">
            <div className="cardItem">
                <div className="card_avatar">
                    <img src={avarta} alt={name} />
                </div>
                <div className="textInfo">
                    <h4>{name}</h4>
                    <p>{position}</p>
                </div>
                <div className="card_icon"><img src={assets.icon_profile} />
                </div>
            </div>


            <hr className="separator"></hr>
            <div className="card_content">
                <p>{title}</p>
            </div>
        </div>
    );
};

export default CardItem;
