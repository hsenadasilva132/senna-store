import '../../styles/button.css'
import { IoIosArrowForward } from "react-icons/io";

function Button({ text, onClick, type = "button" }) {
    return (
        <button className="button" onClick={onClick} type={type}>
            <span className="button-text">{text}</span>
            
            <span className="button-arrow">
                <IoIosArrowForward />
            </span>
        </button>
    )
}

export default Button;