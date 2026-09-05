import '../../styles/cartHeader.css'

import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function CartHeader() {

    const navigate = useNavigate();

    return (
        <header className="cart-header">
            <button className='back-button' onClick={() => navigate('/')}>
                <IoChevronBack />
            </button>

                <h2>Carrinho</h2>

            <Link to="/shop" className='continue-shopping'>
                Continue comprando
            </Link>
        </header>
    )
}

export default CartHeader;