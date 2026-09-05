import '../styles/cart.css';

import { useCart } from '../context/CartContext';

import gsap from 'gsap';
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import CartHeader from '../components/Cart/CartHeader';
import CartProgress from '../components/Cart/CartProgress';
import CartItem from '../components/Cart/CartItem';
import CartSidebar from '../components/Cart/CartSidebar';
import CartEmpty from '../components/Cart/CartEmpty';



function Cart() {

    const { cartItems } = useCart();

    const location = useLocation();

    const [buyNowItem, setBuyNowItem] = useState(
        () => location.state?.buyNowItem || null
    );

    useEffect(() => {
        setBuyNowItem(
            location.state?.buyNowItem || null
        )
    }, [location.key]);

    const handleBuyNowQuantityChange = (quantity) => {

        setBuyNowItem((currentItem) => {

            if (!currentItem) {
                return currentItem;
            }

            return {
                ...currentItem,
                quantity: Math.max(1, quantity)
            };

        });

    };

    const handleBuyNowRemove = () => {
        setBuyNowItem(null);
    };

    const displayedItems = buyNowItem ? [buyNowItem] : cartItems;

    const [currentStep, setCurrentStep] = useState("cart");

    const pageRef = useRef(null);

    useEffect(() => {
        gsap.from(
            pageRef.current.children,
            {
                opacity: 0,
                y: 25,
                duration: .7,
                stagger: .15,
                ease: "power2.out"
            }
        );
    }, []);


    return (
        <main className="cart-page" ref={pageRef}>

            <CartHeader />

            {
                displayedItems.length === 0
                    ? (
                        <CartEmpty />
                    )
                    : (
                        <>

                            <CartProgress
                                currentStep={currentStep}
                                items={displayedItems}
                            />

                            {
                                currentStep === "cart" && (
                                    <>
                                        <h2 className="cart-title-top">
                                            Itens
                                        </h2>

                                        <section className="cart-items">
                                            {displayedItems.map(item => (
                                                <CartItem
                                                    key={`${item.id}-${item.size}`}
                                                    item={item}
                                                    isBuyNow={Boolean(buyNowItem)}
                                                    onBuyNowQuantityChange={
                                                        handleBuyNowQuantityChange
                                                    }
                                                    onBuyNowRemove={handleBuyNowRemove}
                                                />
                                            ))}
                                        </section>
                                    </>
                                )
                            }

                            <CartSidebar
                                currentStep={currentStep}
                                setCurrentStep={setCurrentStep}
                                buyNowItem={buyNowItem}
                            />

                        </>
                    )
            }

        </main>
    );
}

export default Cart;