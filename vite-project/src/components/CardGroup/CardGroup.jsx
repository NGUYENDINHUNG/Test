import "./CardGroup.css"
import CardItem from "./CardItem"
import { Profile } from "../../assets/assets"

const CardGroup = () => {
  return (

    <div className="cardGroup">
      <div className="cardGroup_item">
      {Profile.map((item, index) => {
        return (
          <CardItem
            key={item.id}
            name={item.name}
            position={item.position}
            avarta={item.avarta}
            title={item.title}
          />
        )
      })}
      </div>
    

    </div>
  )
}

export default CardGroup