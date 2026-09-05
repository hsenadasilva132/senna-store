import '../../styles/cartShippingOptions.css'
import { formatPrice } from '../../utils/formatPrice';

function CartShippingOptions({
   /* title,
    description,
    price,
    time,
    active, */
    onClick,
    option,
    selected
}) {
    return (
        <button className={`shipping-option ${selected ? "active" : ""}`} onClick={onClick}>
            <div className="shipping-left">
                <h4>{option.title}</h4>
                <p>{option.deliveryText}</p>
            </div>

            <div className="shipping-right">
                <strong>{formatPrice(option.price)}</strong>
                <span>{option.time}</span>
            </div>
        </button>
    )
}

export default CartShippingOptions;