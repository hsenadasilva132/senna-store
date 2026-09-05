import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/ui/ScrollToTop';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Shipping from '../pages/Shipping';
import Payment from '../pages/Payment';
import Category from '../pages/Category';
import OrderConfirmed from '../pages/OrderConfirmed';
import ProductDetails from '../pages/ProductDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Account from '../pages/Account';
import Orders from '../pages/Orders';
import ComingSoon from '../components/Feedback/ComingSoon';
import PageLoader from '../components/layout/PageLoader';


function AppRoutes() {
    return (
        <>
        <ScrollToTop />
        <PageLoader />    
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/categoria/:category' element={<Category />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/shipping' element={<Shipping />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/order-confirmed' element={<OrderConfirmed />} />
            <Route path='/login' element={<Login />} />    
            <Route path='/register' element={<Register />} />    
            <Route path='/account' element={<Account />} />    
            <Route path='/orders' element={<Orders />} />    
            <Route path='/coming-soon' element={<ComingSoon />} />    
        </Routes>
        </>
    )
}

export default AppRoutes;