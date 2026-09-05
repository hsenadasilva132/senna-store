import '../styles/shipping.css'

import { useLocation } from 'react-router-dom';

import CartShippingHeader from '../components/Cart/Shipping/CartShippingHeader'
//import CartProgress from '../components/Cart/CartProgress'
import CartShippingHero from '../components/Cart/Shipping/CartShippingHero'
import CartShippingAddress from '../components/Cart/Shipping/CartShippingAddress'
import CartShippingFreight from '../components/Cart/Shipping/CartShippingFreight'
import CartShippingBanner from '../components/Cart/Shipping/CartShippingBanner'
import CartShippingSummary from '../components/Cart/Shipping/CartShippingSummary'

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

function Shipping() {

    const location = useLocation();

    const buyNowItem = location.state?.buyNowItem;

    const shippingRef = useRef(null);

    useEffect(() => {
        gsap.from(
            shippingRef.current.children,
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
        <main className="shipping-page" ref={shippingRef}>
            <CartShippingHeader />

            {/* <CartProgress currentStep="shipping" /> */}
            <CartShippingHero />

            <CartShippingAddress />

            <CartShippingFreight />

            <CartShippingBanner />
            
            <CartShippingSummary
                buyNowItem={buyNowItem}
            />

        </main>
    )
}

export default Shipping;