import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/cartEmpty.css'
import gsap from 'gsap';

import BagEmpty from '../../images/tote-bag.png'

function CartEmpty() {

    const navigate = useNavigate();

    const emptyRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            emptyRef.current,
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out'
            }
        );
    }, []);

    return (
        <section className='cart-empty' ref={emptyRef}>
            <div className='empty-icon'>
                <img src={BagEmpty} alt="Sacola Vazia" />
            </div>
            <h2>Seu carrinho está vazio</h2>
            <p>Adicione alguns produtos para começar a sua coleção</p>

            <button onClick={() => navigate('/shop')}>Explorar produtos</button>
        </section>
    )
}

export default CartEmpty;