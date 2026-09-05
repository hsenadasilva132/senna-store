import '../../styles/paymentFooter.css'

import { MdOutlineSupportAgent } from "react-icons/md";
import { FaArrowRotateLeft, FaLock  } from "react-icons/fa6";
import { AiOutlineSafetyCertificate } from "react-icons/ai";


function PaymentFooter() {
    return (
        <footer className='payment-footer'>

            

            <div className='payment-footer-container'>
                <div className='payment-footer-item'>
                    <FaLock />
                    <p>Pagamento criptografado</p>
                </div>
                <div className='payment-footer-item'>
                    <AiOutlineSafetyCertificate />
                    <p>Compra garantida</p>
                </div>
                <div className='payment-footer-item'>
                    <FaArrowRotateLeft />
                    <p>Troca em 30 dias</p>
                </div>
                <div className='payment-footer-item'>
                    <MdOutlineSupportAgent />
                    <p>Suporte 24h</p>
                </div>
            </div>
            <div className='summary-divider'></div>
        </footer>
    )
}

export default PaymentFooter