import React, { useContext } from 'react';
import { CartContext } from './cartContext';
import '../styles/cards.css';
import newImage from '../images/new.jpg';

const Card = (props) => {
  const { cartItems, addToCart } = useContext(CartContext);
  const gameData = props.data;

  const addDataToCart = (id) => {
    addToCart(id);
  };

  const isInCart = cartItems.some((item) => item.id === gameData.id);

  return (
    <div className='cardContainer'>
      <div className='header'>
        <img src={newImage} height='100%' width='100%' alt='header' />
      </div>
      <div className='midarea'>
        <div className='midleft'>
          <img src={gameData.image} height='100%' width='100%' alt='img' />
        </div>
        <div className='midright'>
          <center>
            <h3>{gameData.gamename}</h3>
          </center>
          <div className='price'>Price: {gameData.price}</div>
          <center>
            {isInCart ? (
              <button disabled>Added to Cart</button>
            ) : (
              <button onClick={() => addDataToCart(gameData.id)}>Add to Cart</button>
            )}
            <button onClick={addDataToCart} className='buynow'>
              {gameData.available ? 'Buy' : 'Sold Out'}
            </button>
          </center>
        </div>
      </div>
      <div className='footer'>
        <p className='footerpara'>{gameData.description}</p>
      </div>
    </div>
  );
};

export default Card;

///////hi