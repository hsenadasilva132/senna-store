import '../../styles/cartProgress.css'
//import { useState } from 'react';
import { useCart } from '../../context/CartContext';

function CartProgress({ currentStep, items }) {

    const { shipping } = useCart();

    //const [currentStep, setCurrentStep] = useState("cart");

    const totalItems = items.reduce(
        (total, item) => total + item.quantity, 0
    );

    const steps = {
        cart: 1,
        shipping: 2,
        payment: 3
    };

    const checkoutSteps = [
        {
            id: "cart",
            label: "Carrinho"
        },
        {
            id: "shipping",
            label: "Entrega"
        },
        {
            id: "payment",
            label: "Pagamento"
        }
    ]

    return (
        <section className="cart-progress">
            <div className="progress-top">
                <span className="step">
                    Etapa {steps[currentStep]} de 3
                </span>

                {/* <span className="items-count">
                    {totalItems} prontos
                </span> */}
            </div>

            <div className="progress-text">
                <h2>Seu carrinho</h2>

                <p>
                    Ajuste tamanhos, aplique desconto e confirme
                    a melhor entrega antes do pagamento.
                </p>
            </div>

            <div className="progress-steps">
                {checkoutSteps.map((step) => (
                    <button key={step.id} className={currentStep === step.id ? "active" : ""}>
                        {step.label}
                    </button>
                ))}
            </div>

            <div className="delivery-info">
                <div>
                    <span>Entrega escolhida</span>
                    <strong>{shipping.deliveryText}</strong>
            </div>

                <div className="delivery-items">
                    <span>Itens</span>
                    <strong>
                        {totalItems}{" "}
                        {totalItems === 1
                            ? "Par"
                            : "Pares"}
                    </strong>
                </div>
            </div>
        </section>
    )
}

export default CartProgress;