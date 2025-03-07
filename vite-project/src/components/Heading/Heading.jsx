import "./Heading.css"

const Heading = ({ title, content }) => {
    return (
        <div className="heading">
            <div className="heading_title">
                <h2>{title}</h2>
            </div>
            <div className="heading_content">
                <p>{content}</p>
            </div>

        </div>
    )
}

export default Heading