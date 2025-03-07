import "./Card.css"
const Card = ({ title1, title2, icon, img, style, style2 }) => {
 
    return (
        <div className="banner" style={style}>
            <div className="text">
                <h3 className="title"
                    style={style2}
                >{title1}</h3>
               <h3 className="title"
                    style={style2}
                >{title2}</h3>
                <div className="learn-more">
                    <div className="icon"><img src={icon} /></div>
                    Learn more
                </div>
            </div>
            <div className="image">
                <img src={img} />
            </div>
        </div>
    )
}
export default Card