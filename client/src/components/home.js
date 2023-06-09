import React from 'react';
import Header from './header';
import '../styles/home.css';
import Shopping from './shopping';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container1">
        <center>
          {/* <Link to='/shopping'>
            <button className='homebutton'>Go to Shopping</button>
          </Link> */}
          {/* <Link to='/update'>
            <button className='homebutton'>Go to Update</button>
          </Link> */}
        </center>
      </div>
      <Shopping />
    </div>
  );
};

export default Home;
