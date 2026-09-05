import '../../../styles/shippingSummary.css';

import { useNavigate } from 'react-router-dom';


function CartShippingSummary({ buyNowItem }) {

    const navigate = useNavigate();

    const handleContinue = () => {
        navigate("/payment", {
            state: {
                buyNowItem: buyNowItem || null
            }
        });
    };

    return (
        <section className="shipping-summary">
            <button onClick={handleContinue}>Confirmar</button>
        </section>
    )
}

export default CartShippingSummary;