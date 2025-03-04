import "./ExportCompany.css"
import { asset_Company } from '../../assets/assets'
const ExportCompany = () => {
    return (
        <div className="export_menu">
            <div className="export_menu_list">
                {asset_Company.map((item, index) => {
                    return (
                        <div>
                            <img src={item.image} alt="" />
                        </div>
                    );
                })}
            </div>
        </div>
    )
};

export default ExportCompany;