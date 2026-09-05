import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa6";

function CartShippingHeader() {

    const navigate = useNavigate();

    return (
        <header className="shipping-header">
            <button className='shipping-back' onClick={() => navigate('/cart')}>
                <FaChevronLeft />
            </button>

            <div className='shipping-step'>
                Etapa 2 de 3
            </div>
        </header>
    )
}

export default CartShippingHeader;