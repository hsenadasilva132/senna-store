import '../../styles/paymentMethods.css'
import { useState } from 'react'

import { FaPix } from 'react-icons/fa6';
import { CiCreditCard2, CiBarcode } from "react-icons/ci";


import PaymentMethodCard from '../Payment/PaymentMethodCard'

function PaymentMethods() {

    const [selectedMethod, setSelectedMethod] = useState("pix");

    const paymentMethods = [
        {
            id: "pix",
            title: "Pix",
            description: "Pagamento Instatâneo",
            icon: <FaPix />
        },
        {
            id: "card",
            title: "Cartão",
            description: "Crédito ou Débito",
            icon: <CiCreditCard2 />
        },
        {
            id: "boleto",
            title: "Boleto",
            description: "Compensação em até 3 dias úteis",
            icon: <CiBarcode />
        }
    ];

    return (
        <section className='payment-methods'>
            <div className='payment-methods-header'>
                <span>MÉTODO DE PAGAMENTO</span>

                <h2>Como deseja pagar?</h2>
                <p>Escolha um método para finalizar o pedido.</p>
            </div>

            <div className='payment-methods-grid'>
                {paymentMethods.map((method) => (
                    <PaymentMethodCard
                        key={method.id}
                        method={method}
                        active={selectedMethod === method.id}
                        onClick={() => setSelectedMethod(method.id)}
                    />
                ))}
            </div>
        </section>
    )
}

export default PaymentMethods