import Heading from "../Heading/Heading"
import Card from "./Card"
import "./CardList.css"
import { Export_Card_List } from '../../assets/assets'
const CardList = () => {

    return (
        <div className="cardList">
            <div className="cardlist-item">
                {Export_Card_List.map((item, index) => {
                    return (
                        <Card
                            key={item.id}
                            title1={item.title1}
                            title2={item.title2}
                            style={item.style}
                            icon={item.icon}
                            img={item.image}
                            style2={item.style2}
                        />
                    )

                })}

            </div>

        </div>
    )
}
export default CardList