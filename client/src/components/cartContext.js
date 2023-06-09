import React, { createContext, useState } from 'react';
import games from './intialdata';
export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id) => {
    const gameToAdd = games.find((game) => game.id === id);
    setCartItems([...cartItems, gameToAdd]);
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
    setCartItems(updatedCartItems);
  };

  const pay = () => {
    // Perform payment logic here
    // ...
    // Clear the cart after payment
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, pay }}>
      {children}
    </CartContext.Provider>
  );
};