import '../../styles/cartSidebar.css'
import CartShippingOptions from './CartShippingOptions'

import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/formatPrice' 
import { useNavigate } from 'react-router-dom';

import { GoArrowRight } from "react-icons/go";

function CartSidebar({ buyNowItem }) {

    const { shipping, setShipping, cartItems } = useCart();

    const navigate = useNavigate();

    const checkoutItems = buyNowItem ? [buyNowItem] : cartItems;

    const checkoutTotalItems =
        checkoutItems.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );

    const checkoutSubtotal =
        checkoutItems.reduce(
            (total, item) =>
                total + (item.price * item.quantity),
            0
        );

    const checkoutTotal = checkoutSubtotal + shipping.price;
    
   const shippingOptions = [
        {
            id: "express",
            title: "Express",
            price: 24.90,
            time: "14h",
            deliveryText: "Recebe amanhã, até 14h"
        },
        {
            id: "standard",
            title: "Padrão",
            price: 12.90,
            time: "2 dias",
            deliveryText: "Receba em até 2 dias"
        },
        {
            id: "pickup",
            title: "Retirada",
            price: 0,
            time: "Hoje",
            deliveryText: "Retire na loja"
        }
    ];

    const handleContinue = () => {
        navigate('/shipping', {
            state: {
                buyNowItem:
                    buyNowItem || null
            }
        }
        );
    };

   // const discount = 0;

   // const total = subtotal - discount + shipping.price;

    return (
    <aside className="cart-sidebar">
          <div className="checkout-header">
              <h2>Checkout</h2>
          </div>
          
          <section className="coupon-section">
              <h3>Cupom</h3>

              <div className="coupon-input">
                  <input type="text" placeholder="Digite o cupom" />
                  <button>Aplicar</button>
              </div>
          </section>

          <hr />

          <section className="shipping-section">
              <div className="shipping-header">
                  <h3>Entrega</h3>
                  <span>Selecione uma opção</span>
              </div>

                <div className='shipping-options'>
                    {shippingOptions.map((option) => (
                        <CartShippingOptions
                            key={option.id}
                            option={option}
                            selected={shipping.id === option.id}
                            onClick={() => setShipping(option)}
                        />
                   ))}
              </div>
          </section>

          <hr />

          <section className='summary-section'>
              <div className='summary-header'>
                    <h3>Resumo (
                        {checkoutTotalItems}
                        {" "}
                        {checkoutTotalItems === 1
                            ? "item"
                            : "itens"
                        }
                        )
                    </h3>
                </div>
                
                <div className='summary-line'>
                    <span>Produtos</span>
                    <span>{formatPrice(checkoutSubtotal)}</span>
              </div>
              
              <div className='summary-line'>
                  <span>Desconto</span>
                  <span>- R$ 0,00</span>
              </div>
              <div className='summary-line'>
                  <span>Frete</span>
                    <span>{formatPrice(shipping.price)}</span>
                </div>
                
                <div className='summary-divider'></div>
                
                
                <div className='summary-total' onClick={handleContinue}>
                    <div>
                        <h3>Total Final</h3>
                        <strong>{formatPrice(checkoutTotal)}</strong>
                    </div>
                    <div className='summary-total-item'>
                        <span>Avançar</span>
                        <GoArrowRight size={38} className='icon-summary'/>
                    </div>
                </div>
          </section>
    </aside>
  )
}

export default CartSidebar
