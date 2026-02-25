import React, { createContext, useState, useEffect, useCallback } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    const updateCartCount = useCallback(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartCount(cart.length);
    }, []);


    useEffect(() => {
        updateCartCount();

        const handleStorageChange = () => {
            updateCartCount();
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [updateCartCount]);


    const addToCart = (product) => {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = [...existingCart, product];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        updateCartCount();
    };


    const removeFromCart = (index) => {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = existingCart.filter((_, i) => i !== index);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        updateCartCount();
    };


    const clearCart = () => {
        localStorage.setItem("cart", JSON.stringify([]));
        updateCartCount();
    };

    return (
        <CartContext.Provider value={{ cartCount, addToCart, removeFromCart, clearCart, updateCartCount }}>
            {children}
        </CartContext.Provider>
    );
};
