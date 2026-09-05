import '../../styles/cartItem.css'
import { FiTrash2 } from 'react-icons/fi';  
import { formatPrice } from '../../utils/formatPrice';
import { useCart } from '../../context/CartContext';

import { useRef } from 'react';
import gsap from 'gsap';


function CartItem({ item, isBuyNow = false, onBuyNowQuantityChange, onBuyNowRemove }) {

    const { updateQuantity, removeFromCart } = useCart();

    const cardRef = useRef(null);

    const handleDecrease = () => {
        if (isBuyNow) {
            onBuyNowQuantityChange(item.quantity - 1);
            return;
        }

        updateQuantity(
            item.id,
            item.size,
            item.quantity - 1
        );
    };

    const handleIncrease = () => {
        if (isBuyNow) {
            onBuyNowQuantityChange(item.quantity + 1);
            return;
        }

        updateQuantity(
            item.id,
            item.size,
            item.quantity + 1
        );
    };

    const handleRemove = () => {
        gsap.to(
            cardRef.current, {
            scale: .96,
            opacity: 0,
            x: -18,
            duration: .3,
            ease: "power2.out",
            onComplete: () => {
                if (isBuyNow) {
                    onBuyNowRemove();
                    return;
                }
                
                removeFromCart(
                    item.id,
                    item.size
                );
            }
        }
        )
    };

   /* useEffect(() => {
        gsap.to(
            cardRef.current, {
            scale: .96,
            opacity: 0,
            y: -18,
            duration: .3,
            ease: "power2.out"
        }
        );
    }); */

    return (
        <article className="cart-item" ref={cardRef}>
            <div className='cart-item-top'>
                <img src={item.image} alt={item.name} className='cart-image' />
                
                <div className='cart-content'>   
                    <div className='cart-title'>
                        <div>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>

                        <strong>{formatPrice(item.price)}</strong>
                    </div>

                    <div className='cart-tags'>
                        <span>Tam {item.size}</span>
                        <span>{item.color}</span>
                    </div>

                    <div className='cart-bottom'>
                        <div className='cart-selector'>
                            <button
                                onClick={handleDecrease}
                            >-</button>
                            <span>{item.quantity}</span>
                            <button
                                onClick={handleIncrease}
                            >+</button>
                        </div>

                        <button
                            className='cart-remove'
                            onClick={handleRemove}>
                            <FiTrash2 />
                            {isBuyNow ? "Cancelar" : "Remover"}
                        </button>
                    </div>
                </div>
            </div>
            <div className='delivery-estimate'>
                Entrega estimada para amanhã entre 14h e 18h
            </div>
        </article>
    )
}

export default CartItem;