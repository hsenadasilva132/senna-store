import '../../../styles/shippingFreight.css'

import { useState, useRef } from "react";
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

import { useCart } from "../../../context/CartContext";
import { formatPrice } from "../../../utils/formatPrice";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

function CartShippingFreight() {

    const { shipping, setShipping } = useCart();
    const [showOptions, setShowOptions] = useState(false);

    const listRef = useRef(null);
    const timelineRef = useRef(null);


    const shippingOptions = [
        {
            id: "express",
            title: "Expresso",
            description: "Receba amanhã até 14h",
            price: 24.90,
            time: "14h"
        },
        {
            id: "standard",
            title: "Padrão",
            description: "Receba em até 2 dias",
            price: 12.90,
            time: "2 dias"
        },
        {
            id: "pickup",
            title: "Retirada",
            description: "Retire hoje na loja",
            price: 0,
            time: "Retirada de Segunda a Sexta"
        }
    ];

    function handleSelected(option) {
        setShipping(option);
        setShowOptions(false);
    }

    useGSAP(() => {
        if (!listRef.current) return;

        const cards = listRef.current.querySelectorAll(".shipping-card");

        timelineRef.current = gsap.timeline({ paused: true })
            .fromTo(
                listRef.current,
                {
                    height: 0,
                    opacity: 0
                },
                {
                    height: "auto",
                    opacity: 1,
                    duration: .4,
                    ease: "power2.out"
                }
            )
            .fromTo(cards,
                { y: 14, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3, stagger: 0.07, ease: "power2.out" },
                "-=0.2"
            );
    }, []);

    useGSAP(() => {
        if (!timelineRef.current) return;
        showOptions ? timelineRef.current.play() : timelineRef.current.reverse();
    }, [showOptions])

    return (
        <section className="shipping-freight">
            <div className="freight-header">
                <h2>Confirme seu frete</h2>
                <span>{shippingOptions.length} opções</span>
            </div>

            <div className="freight-selected">
                <div>
                    <h3>{shipping.title}</h3>
                    <p>{shipping.description}</p>
                </div>
                <div className="selected-price">
                    <strong>
                        {formatPrice(shipping.price)}
                    </strong>
                    <span>{shipping.time}</span>
                </div>
            </div>
            
            <button className="change-shipping" onClick={() => setShowOptions(!showOptions)}>
                Alterar Entrega
                <span className={`chevron-icon ${showOptions ? "open" : ""}`}>
                    {showOptions ? <FiChevronUp /> : <FiChevronDown />}
                </span>
            </button>
                    <div className="shipping-list" ref={listRef}>
                        {
                            shippingOptions.map(option => (
                                <button key={option.id} className={
                                    option.id === shipping.id ? "shipping-card active" : "shipping-card"}
                                    onClick={() => handleSelected(option)}
                                >
                                    <div>
                                        <h4>{option.title}</h4>
                                        <p>{option.description}</p>
                                    </div>
                                    <div>
                                        <strong>
                                            {formatPrice(option.price)}
                                        </strong>
                                        <span>{option.time}</span>
                                    </div>
                                </button>
                            ))
                        }
                    </div>
        </section>
    )
}

export default CartShippingFreight;