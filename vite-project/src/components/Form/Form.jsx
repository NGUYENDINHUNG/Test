import { assets } from "../../assets/assets"
import "./Form.css"

const Form = () => {
    return (
        <div>
            <div className="Form">
                <div className="Form-register">
                    <div className="radios-button">
                        <div className="cuttom">
                            <div className="radio"></div>
                            <p>Say hi</p>
                        </div>
                        <div className=" cuttom">

                            <div className="radio"></div>
                            <p>get a quote</p>
                        </div>
                    </div>
                    <div className="form_title">
                        <div>
                            <label htmlFor="" className="">Name</label>
                            <input className="field" type="text" placeholder="Name" />
                        </div>
                        <div>
                            <label htmlFor="">Email*</label>
                            <input className="field" type="text" placeholder="Email" />
                        </div>
                        <div>

                            <label htmlFor="">Messenger*</label>
                            <input className="messenger" type="text" placeholder="Messenger" />
                        </div>
                        <button className="button_form"><p>Send Messenger</p></button>
                    </div>
                </div>
                <div className="image_form">
                    <img src={assets.contact} />
                </div>
            </div>

        </div>

    )
}

export default Form

