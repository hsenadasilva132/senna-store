import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate, useLocation } from "react-router-dom";
import '../styles/orderConfirmed.css'

import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";

import CartOrderConfirmedBox from '../Animations/CartOrderConfirmedBox';

function OrderConfirmed() {

    const {
        shipping,
        total,
        clearCart
    } = useCart();


    const navigate = useNavigate();
    const location = useLocation();

    const orderId = location.state?.orderId;

    function backStart() {
        clearCart();
        navigate('/');
    }
    const [boxDone, setBoxDone] = useState(false);

    const textRef = useRef(null);
    const cardRef = useRef(null);
    const actionsRef = useRef(null);

    // roda só depois que a animação da caixa termina
    useGSAP(() => {
        if (!boxDone) return;

        gsap.timeline({ defaults: { ease: "power2.out" } })
            .fromTo(textRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 })
            .fromTo(cardRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, "-=0.2")
            .fromTo(actionsRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, "-=0.2");
    }, [boxDone]);

    return (
        <main className="confirmed-page">
            <CartOrderConfirmedBox onComplete={() => setBoxDone(true)} />

            <div className="confirmed-text" ref={textRef}>
                <span className="confirmed-eyebrow">Pedido realizado</span>
                <h1>Pedido confirmado!</h1>
                <p>Recebemos seu pagamento e já estamos preparando tudo.</p>
            </div>

            <div className="confirmed-card" ref={cardRef}>
                <div className="confirmed-row">
                    <span>Número do pedido</span>
                    <strong>#{orderId}</strong>
                </div>
                <div className="confirmed-row">
                    <span>Previsão de entrega</span>
                    <strong>{shipping.time}</strong>
                </div>
                <div className="confirmed-row">
                    <span>Total pago</span>
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>

            <div className="confirmed-actions" ref={actionsRef}>
                <button className="confirmed-cta" onClick={() => {
                    if (!orderId) return;
                    navigate('/coming-soon')
                }}>
                    Acompanhar pedido
                </button>
                <button className="confirmed-secondary" onClick={backStart}>
                    Voltar ao Ínicio
                </button>
            </div>
        </main>
    )
}

export default OrderConfirmed;