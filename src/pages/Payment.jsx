import '../styles/payment.css'

import PaymentHeader from '../components/Payment/PaymentHeader'
import PaymentMethods from '../components/Payment/PaymentMethods'
import PaymentSummary from '../components/Payment/PaymentSummary'
import PaymentFooter from '../components/Payment/PaymentFooter'

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

function Payment() {

    const paymentRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            paymentRef.current.children,
            {
                y: 25,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: .9,
                stagger: .15,
                ease: "power2.out"
            }
        );
    }, []);

    return (
        <main className="payment-page" ref={paymentRef}>
            <PaymentHeader />

            <PaymentMethods />

            <PaymentSummary />

            <PaymentFooter />
        </main>
    )
}

export default Payment;