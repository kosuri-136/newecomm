import React from 'react';
import Card from './cards';
import '../styles/shopping.css';
import games from './intialdata';

const Shopping = () => {
  return (
    <div className="container2">
      {games.map((game) => (
        <Card key={game.id} data={game} />
      ))}
    </div>
  );
};

export default Shopping;
