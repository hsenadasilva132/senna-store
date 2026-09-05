import '../../../styles/cartShipping.css'

import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FiPlusCircle } from "react-icons/fi";
import { FiPlus, FiSearch, FiMapPin } from "react-icons/fi";

import CartShippingOptions from '../CartShippingOptions'

function CartShipping() {
    return (
        <main className='shipping-page'>
            {/* <ShippingHeader /> */}

            <section className='shipping-content'>
                <div className='shipping-left'>
                    {/* <ShippingAddress />
                    <ShippingOptions /> */}
                </div>

                <aside className='shipping-right'>
                    {/* <CartShippingBanner />
                    <CartShippingSummary /> */}
                </aside>
            </section>
        </main>
    )
}

export default CartShipping;