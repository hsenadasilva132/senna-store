//import { useNavigate } from 'react-router-dom';
//import { FaChevronLeft } from "react-icons/fa6";

function CartShippingHero() {

 //   const navigate = useNavigate();

    return (
        <section className="shipping-hero">
            <svg
                className="shipping-hero-svg"
                viewBox="0 0 1200 400"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <linearGradient id="heroG1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#3a3648" />
                        <stop offset="100%" stopColor="#26242F" />
                    </linearGradient>
                    <radialGradient id="heroG2" cx="75%" cy="15%" r="70%">
                        <stop offset="0%" stopColor="#B3C1D6" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#B3C1D6" stopOpacity="0" />
                    </radialGradient>
                </defs>
                <rect width="1200" height="400" fill="url(#heroG1)" />
                <rect width="1200" height="400" fill="url(#heroG2)" />
                <circle cx="980" cy="90" r="220" fill="rgba(179,193,214,0.06)" />
                <circle cx="180" cy="330" r="160" fill="rgba(179,193,214,0.05)" />
                <path
                    d="M -40 260 Q 350 180 700 250 T 1260 210"
                    stroke="rgba(179,193,214,0.22)"
                    strokeWidth="2.5"
                    fill="none"
                />
            </svg>

            <div className="shipping-hero-fade" />

            <div className="shipping-hero-content">
                <span className="hero-eyebrow">Entrega e Frete</span>
                <h1>Para onde levamos o seu pedido?</h1>
            </div>
        </section>
    )
}

export default CartShippingHero;