import '../../styles/shopSale.css'

import { useEffect, useState } from 'react';

import sale1 from '../../assets/imagesCategory/Shop/shopSale1.webp'
import sale2 from '../../assets/imagesCategory/Shop/shopSale2.webp'
import sale3 from '../../assets/imagesCategory/Shop/shopSale3.webp'

import Button from '../layout/button'

function ShopSale({ onSaleClick }) {

    const saleEndDate = new Date('2026-12-31T23:59:59');

    const getTimeLeft = () => {
        const difference = saleEndDate.getTime() - Date.now();

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        return {
            days: Math.floor(
                difference / (1000 * 60 * 60 * 24)
            ),
            hours: Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            ),
            minutes: Math.floor(
                (difference / (1000 * 60)) % 60
            ),
            seconds: Math.floor(
                (difference / (1000)) % 60
            )
        };
    };

    const [timeLeft, setTimeLeft] = useState(getTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft);
        }, 1000);

        return () => clearInterval(timer);

    }, []);

    const formatNumber = (number) => {
        return String(number).padStart(2, '0');
    }

    return (
        <section className='shop-sale'>
            <div className='shop-sale-content'>
                <span className='shop-sale-label'>LIMITED DROP</span>
                <h2>
                    Até 20% OFF
                    <br />
                    em modelos selecionados.
                </h2>
                <p>
                    Uma seleção especial de modelos com condições exclusivas por tempo limitado.
                </p>
                <div className='shop-sale-timer'>
                    <div className='timer-item'>
                        <strong>{formatNumber(timeLeft.days)}</strong>
                        <span>Dias</span>
                    </div>
                <div className='timer-divider'>
                    :
                </div>
                <div className='timer-item'>
                    <strong>{formatNumber(timeLeft.hours)}</strong>
                    <span>Horas</span>
                </div>
                <div className='timer-divider'>
                    :
                </div>
                <div className='timer-item'>
                    <strong>{formatNumber(timeLeft.minutes)}</strong>
                    <span>Min</span>
                </div>
                <div className='timer-divider'>
                    :
                </div>
                <div className='timer-item'>
                    <strong>{formatNumber(timeLeft.seconds)}</strong>
                    <span>Seg</span>
                </div>
                </div>
                <Button text="Ver ofertas" onClick={onSaleClick} />
            </div>
            <div className='shop-sale-gallery'>
                <div className='shop-sale-image image-main'>
                    <img src={sale1} alt="" />
                </div>
                <div className='shop-sale-image image-secondary'>
                    <img src={sale2} alt="" />
                </div>
                <div className='shop-sale-image image-third'>
                    <img src={sale3} alt="" />
                </div>
            </div>
        </section>
    )
}

export default ShopSale;