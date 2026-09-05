import { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';

const CartContext = createContext();

export function CartProvider({ children }) {

    const { showToast } = useToast();

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("senna-cart");

        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("senna-cart", JSON.stringify(cartItems));
    }, [cartItems]);
    
    //const [savedItems, setSavedItems] = useState([]);

    const addToCart = (product, size, quantity) => {
        const existingItem = cartItems.find(
            item =>
                item.id === product.id &&
                item.size === size
        );

        if (existingItem) {
            setCartItems(prev =>
                prev.map(item =>
                    item.id === product.id &&
                        item.size === size
                        ? {
                            ...item,
                            quantity: item.quantity + quantity
                        }
                        : item
                )
            );
        } else {
            setCartItems(prev => [
                ...prev,
                {
                    ...product,
                    size,
                    quantity
                }
            ]);
        }
    };

    const removeFromCart = (id, size) => {
        setCartItems(
            cartItems.filter(
                item =>
                    !(item.id === id && item.size === size)
            )
        );

        showToast("Produto removido!", "error");
    };

    const updateQuantity = (id, size, quantity) => {

    setCartItems(currentItems =>
        currentItems.map(item => {

            if (
                item.id === id &&
                item.size === size
            ) {

                return {
                    ...item,
                    quantity: Math.max(
                        1,
                        Math.min(quantity, item.stock)
                    )
                };

            }

            return item;

        })
    );
};

    const clearCart = () => {
        setCartItems([]);
    };

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const subtotal = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    const [shipping, setShipping] = useState({
        id: "express",
        title: "Expresso",
        price: 24.90,
        time: "14h",
        deliveryText: "Receba amanhã, até 14h"
    });

    const total = subtotal + shipping.price;

    const emptyAddress = {
        street: "",
        number: "",
        neighborhood: "",
        city: "",
        state: "",
        cep: "",
        complement: "",
        reference: ""
    }

    const ADDRESS_STORAGE_KEY = "shipping-address";

    function getInitialAddress() {
        const saved = localStorage.getItem(ADDRESS_STORAGE_KEY);

        return saved ? JSON.parse(saved) : emptyAddress;
    }

    const [address, setAddress] = useState(getInitialAddress);

    useEffect(() => {
        localStorage.setItem(ADDRESS_STORAGE_KEY, JSON.stringify(address))
    }, [address]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                
                subtotal,
                totalItems,

                shipping,
                setShipping,

                address,
                setAddress,

                total
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

