import "./ExportCompany.css"
import { asset_Company } from "../../assets/assets"

const ExportCompany = () => {
    return (
        <div className="export_menu">
            <div className="export_menu_list">
                {asset_Company.map((item, index) => {
                    return (
                        <div key={index} className="logo-wrapper">
                            <img src={item.image} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ExportCompany