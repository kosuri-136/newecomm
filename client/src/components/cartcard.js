import React from 'react';
import '../styles/cartcard.css';
// import { GooglePayButton } from '@google-pay/button-react'; 
// import games from './intialdata';
import useRazorpay from "react-razorpay";

// const Razorpay = useRazorpay();
const Cartcard = (props) => {
  const { gamename, price, image, removeFromCart } = props;
  const Razorpay = useRazorpay();
  const handlePaySubmit = (e)=>{
    e.preventDefault();
   
      const options = {
        key: "rzp_test_yKLoHIdLLjVdCk",
        key_secret:"lPsCF7TMeeDEJlC4lMBqzCWf",
        amount:"1000"   ,
        currency:"INR",
        name:"PUBG",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"KOSURI RAVIKANTH",
          email:"",
          contact:"0000000000"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  




  return (
    <center>
      <div className="card" style={{ width: '250px', height: '250px' }}>
        <h3>{gamename}</h3>
        <img src={image} alt={gamename} style={{ width: '40%', height: '50%' }} />
            <p>Price: {price}</p>
                <div className="buttonContainer">
                    <span className='space'>
                        <button onClick={removeFromCart}>Remove from Cart</button>
                    </span>
                <span className='space'>
                    
            <button onClick={handlePaySubmit}>Pay Now</button>
          </span>
        </div>
      </div>
    </center>
  );
};

export default Cartcard;