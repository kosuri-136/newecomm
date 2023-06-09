import React, { useContext } from 'react';
import '../styles/cart.css';
import '../styles/cartcard.css';
import Header from './header';
import Cartcard from './cartcard';
import { CartContext } from './cartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  return (
    <div>
      <Header />
      <div>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <Cartcard
              key={index}
              gamename={item.gamename}
              price={item.price}
              image={item.image}
              removeFromCart={() => handleRemoveFromCart(item.id)}
            />
          ))
        ) : (
          <center>
          <div className="empty-cart">Your cart is empty.</div>
          </center>
        )}
      </div>
    </div>
  );
};

export default Cart;      