import '../../styles/paymentHeader.css';

import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';

function PaymentHeader() {

    const navigate = useNavigate();

    return (

        <header className='payment-header'>
            <span>
                ETAPA 3 de 3
            </span>

            <div className='payment-content'>
                <button onClick={() => navigate("/shipping")} className='payment-back'>
                <IoChevronBack />
            </button>
                <h1>Pagamento</h1>
                <p>Escolha a forma de pagamento e confirme seu pedido.</p>
            </div>
        </header>
    )
}

export default PaymentHeader