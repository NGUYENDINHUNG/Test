import { assets } from "../../assets/assets"
import "./CardService.css"
const CardService = () => {
  return (

    <div className="content_service">
      <div className="content_service_left">
        <h3>Let's make things happen</h3>
        <p>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button className="button_service"><label>Get your free proposal</label></button>
      </div>

      <div className="content_service_right">
        <div className="graphics_service">
          <img src={assets.Banner_Servie} />
        </div>
      </div>

    </div>


  )
}
export default CardService