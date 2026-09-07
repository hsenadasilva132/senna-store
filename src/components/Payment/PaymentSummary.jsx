import '../../styles/paymentSummary.css'

import { useCart } from '../../context/CartContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import { useAuth } from '../../context/AuthContext';

import API_URL from '../../services/api'


function PaymentSummary() {

    const navigate = useNavigate();

    const location = useLocation();

    const buyNowItem = location.state?.buyNowItem;

    const {
        cartItems,
        shipping,  
    } = useCart();

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
            total +
            (
                item.price *
                item.quantity
            ),
        0
    );
    
    const checkoutTotal = checkoutSubtotal + shipping.price;

    const { token } = useAuth();


    const handleFinishOrder = async () => {
    if (!token) {
        navigate('/login');
        return;
    }
    try {

        const response = await fetch(
            `${API_URL}/orders/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    items: checkoutItems.map(item => ({
                        product_id: item.id,
                        product_name: item.name,
                        price: item.price,
                        quantity: item.quantity,
                        size: item.size
                    }))
                })
            }
        );

        if (!response.ok) {
            const errorData = await response.json();

            console.error("Erro ao criar pedido:", errorData);
            return;
        }


        const order = await response.json();


        navigate('/order-confirmed', {
            state: {
                orderId: order.id
            }
        });

    } catch (error) {

        console.error("Erro ao finalizar pedido:", error);
    }
};

    return (
        <section className='payment-summary'>
            <div className='payment-summary-header'>
                <h2>Confira seu Pedido</h2>
                <span>RESUMO</span>
            </div>
            <div className='payment-summary-content'>
                <div className='summary-row'>
                    <span>Produtos ({checkoutTotalItems})</span>
                    <strong>{formatPrice(checkoutSubtotal)}</strong>
                </div>
                <div className='payment-summary-products'>
                    {
                        checkoutItems.map(item => (
                            <div key={`${item.id}-${item.size}`} className='summary-product'>
                                <span>
                                    {item.quantity}x {item.name} - {item.color}
                                    <small>Tam {item.size}</small>
                                </span>
                                <strong>{formatPrice(item.price * item.quantity)}</strong>
                            </div>
                        ))
                    }
                </div>

                <div className='summary-divider'></div>

                <div className='summary-row'>
                    <span>Entrega</span>
                    <strong>{shipping.title} • {shipping.time}</strong>
                </div>
                <div className='summary-row'>
                    <span>Frete</span>
                    <strong>{formatPrice(shipping.price)}</strong>
                </div>

                <div className='summary-divider'></div>

                <div className='payment-summary-total' onClick={handleFinishOrder}>
                    <div>
                        <span>Confirmar Pagamento</span>
                        <small>Total incluindo o frete</small>
                    </div>
                    <h2>{formatPrice(checkoutTotal)}</h2>
                </div>
            </div>
        </section>
    )
}

export default PaymentSummary;