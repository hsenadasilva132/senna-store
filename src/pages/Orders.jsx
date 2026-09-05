import '../styles/order.css'

import { FiArrowLeft, FiArrowRight, FiPackage } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import API_URL from '../services/api'

function Orders() {

    const navigate = useNavigate();

    const { token, user, loadingUser } = useAuth();

    const [orders, setOrders] = useState([]);
    const [loadingOrders, setLoadingOrders] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (loadingUser) {
            return;
        }

        if (!user || !token) {
            navigate('login', {
                replace: true
            });

            return;
        }

        const fetchOrders = async () => {
            try {
                setLoadingOrders(true);

                const response = await fetch(
                    `${API_URL}/orders/`,
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

                if (!response.ok) {
                    const data = await response.json();

                    throw new Error(
                        data.detail || 'Não foi possível carregar seus pedidos.'
                    );
                }

                const data = await response.json();

                setOrders(data)
                
            } catch (error) {
                console.error('Erro ao buscar pedidos:', error);

                setError(error.message || 'Não foi possível carregar seus pedidos.');
            } finally {
                setLoadingOrders(false);
            }
        };

        fetchOrders();
    }, [token, user, loadingUser, navigate]);

    if (loadingUser || loadingOrders) {
        return (
            <main className='orders-loading'>
                <p>Carregando seus pedidos...</p>
            </main>
        );
    }

    return (
        <main className='orders-page'>
            <button
                type="button"
                className='orders-back'
                onClick={() => navigate('/account')}
            >
                <FiArrowLeft />
                Voltar para a minha conta
            </button>

            <header className='orders-header'>
                <div>
                    <span className='orders-label'>SENNA STORE</span>
                    <h1>Meus pedidos</h1>
                    <p>
                        Consulte seu histórico de compras e acompanhe seus pedidos.
                    </p>
                </div>
            </header>

            {error && (
                <div className='orders-error'>
                    <p>{error}</p>
                </div>
            )}

            {!error && orders.length === 0 && (
                <section className='orders-empty'>
                    <div className='orders-empty-icon'>
                        <FiPackage />
                    </div>

                    <span>Ainda não há pedidos</span>

                    <h2>Começe por aqui!</h2>

                    <p>
                        Quando você realizar uma compra,
                        seus pedidos aparecerão nesta seção.
                    </p>

                    <button onClick={() => navigate('/shop')}>
                        Explorar produtos
                        <FiArrowRight />
                    </button>
                </section>
            )}

            {!error && orders.length > 0 && (
                <section className='orders-list'>
                    {orders.map((order) => (
                        <article className='order-card' key={order.id}>
                            <div className='order-card-main'>
                                <div className='order-card-header'>
                                    <div>
                                        <span>Pedido</span>
                                        <h2>#{order.id}</h2>
                                    </div>

                                    <span className={`order-status ${order.status}`}>
                                        {order.status}
                                    </span>
                                </div>

                                <div className='order-items-preview'>
                                    {order.items.map(item => (
                                        <div className='order-item' key={item.id}>
                                            <div>
                                                <strong>{item.product_name}</strong>
                                                <span>Tamanho {item.size}</span>
                                            </div>
                                            <span>x{item.quantity}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className='order-card-footer'>
                                    <div>
                                        <span>Total</span>

                                        <strong>
                                            {new Intl.NumberFormat(
                                                'pt-BR',
                                                {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }
                                            ).format(order.total)}
                                        </strong>
                                    </div>

                                    <button type="button" onClick={() => navigate('/coming-soon')}>
                                        Ver pedido
                                        <FiArrowRight />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            )}
        </main>
    )
}

export default Orders;