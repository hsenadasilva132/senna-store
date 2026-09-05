import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function CartOrderConfirmedBox({ onComplete }) {
    const boxRef = useRef(null);
    const leftFlapRef = useRef(null);
    const rightFlapRef = useRef(null);
    const glowRef = useRef(null);
    const confettiRef = useRef(null);

    useGSAP(() => {
        const confettiPieces = confettiRef.current.querySelectorAll(".confetti-piece");

        const tl = gsap.timeline({
            defaults: { ease: "power2.out" },
            onComplete: () => onComplete && onComplete()
        });

        // 1. caixa "pousando" com bounce
        tl.fromTo(boxRef.current,
            { scale: 0.8, opacity: 0, y: 20 },
            { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.6)" }
        )

        // 2. abas abrindo (uma levemente atrás da outra)
        .to(leftFlapRef.current, { rotate: -55, duration: 0.4 }, "+=0.05")
        .to(rightFlapRef.current, { rotate: 55, duration: 0.4 }, "<")

        // 3. brilho estourando de dentro
        .fromTo(glowRef.current,
            { scale: 0, opacity: 0.9 },
            { scale: 3.2, opacity: 0, duration: 0.7, ease: "power2.out" },
            "-=0.15"
        )

        // 4. confetes voando em direções diferentes
        .fromTo(confettiPieces,
            { x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 },
            {
                x: (i) => gsap.utils.random(-70, 70),
                y: (i) => gsap.utils.random(-90, -30),
                scale: 1,
                rotate: (i) => gsap.utils.random(-180, 180),
                duration: 0.6,
                stagger: 0.03,
                ease: "power2.out"
            },
            "-=0.5"
        )
        // ...e depois caindo/sumindo
        .to(confettiPieces, {
            y: "+=60",
            opacity: 0,
            duration: 0.6,
            stagger: 0.02,
            ease: "power1.in"
        }, "-=0.1");

    }, []);

    return (
        <div className="confirmed-box-wrapper">
            <svg viewBox="0 0 240 220" className="confirmed-box-svg">
                <defs>
                    <linearGradient id="boxGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3d3a4a" />
                        <stop offset="100%" stopColor="#26242D" />
                    </linearGradient>
                    <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#B3C1D6" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#B3C1D6" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* sombra no chão */}
                <ellipse cx="120" cy="205" rx="55" ry="8" fill="rgba(0,0,0,0.35)" />

                <g ref={boxRef}>
                    {/* interior escuro (a "boca" da caixa) */}
                    <rect x="63" y="100" width="114" height="20" rx="3" fill="#100f14" />

                    {/* brilho que estoura de dentro */}
                    <circle ref={glowRef} cx="120" cy="106" r="14" fill="url(#glowGrad)" opacity="0" />

                    {/* confetes (nascem no centro da abertura da caixa) */}
                    <g ref={confettiRef}>
                        <rect className="confetti-piece" x="115" y="100" width="8" height="8" rx="2" fill="#B3C1D6" />
                        <circle className="confetti-piece" cx="120" cy="105" r="4" fill="#D9D9D9" />
                        <rect className="confetti-piece" x="125" y="102" width="6" height="6" rx="2" fill="#B3C1D6" />
                        <circle className="confetti-piece" cx="110" cy="103" r="3.5" fill="#D9D9D9" />
                        <rect className="confetti-piece" x="118" y="98" width="7" height="7" rx="2" fill="#8fa3c2" />
                        <circle className="confetti-piece" cx="128" cy="107" r="3" fill="#B3C1D6" />
                        <rect className="confetti-piece" x="108" y="106" width="6" height="6" rx="2" fill="#D9D9D9" />
                        <circle className="confetti-piece" cx="133" cy="101" r="4" fill="#8fa3c2" />
                    </g>

                    {/* corpo da caixa */}
                    <rect x="55" y="120" width="130" height="90" rx="10" fill="url(#boxGrad)" stroke="rgba(179,193,214,0.15)" />
                    <line x1="120" y1="120" x2="120" y2="210" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />
                    <path d="M55,145 L185,145" stroke="rgba(179,193,214,0.08)" strokeWidth="1" />

                    {/* aba esquerda (fecha por cima, abre girando pra fora) */}
                    <rect
                        ref={leftFlapRef}
                        x="55" y="104" width="65" height="16" rx="3"
                        fill="url(#boxGrad)"
                        stroke="rgba(179,193,214,0.15)"
                        style={{ transformOrigin: "55px 112px" }}
                    />

                    {/* aba direita */}
                    <rect
                        ref={rightFlapRef}
                        x="120" y="104" width="65" height="16" rx="3"
                        fill="url(#boxGrad)"
                        stroke="rgba(179,193,214,0.15)"
                        style={{ transformOrigin: "185px 112px" }}
                    />
                </g>
            </svg>
        </div>
    )
}

export default CartOrderConfirmedBox;