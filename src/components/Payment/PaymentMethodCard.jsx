import { BsCheck2Circle } from "react-icons/bs";

function PaymentMethodCard({ method, active, onClick }) {
    return (
        <button onClick={onClick} className={`payment-method-card ${active ? "active" : ""}`}>
            <div className="payment-icon">
                {method.icon}
            </div>
            <div className="payment-info">
                <h3>{method.title}</h3>
                <p>{method.description}</p>
            </div>
            <BsCheck2Circle className="payment-check"/>
        </button>
    )
}

export default PaymentMethodCard;