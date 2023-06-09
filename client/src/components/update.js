import React, { useState } from 'react';
import Header from './header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const [gameData,setGameData]=useState('');
  let [gamename, setGamename] = useState('');
  //let [flag, setFlag] = useState('Not found');
  const [updateGamename,setUpdateGamename] = useState('');
  const [updateprice,setUpdateprice] = useState('');
  const [updateimage,setUpdateimage]=useState('');
  const [updatedescription,setUpdatedescription]=useState('');
  const [updateAvailability,setUpdateAvailability]=useState('');
  const [updateReviews,setUpdateReviews]=useState('');
  const changename=(e)=>{
    setUpdateGamename(e.target.value)
  }
  const changeprice=(e)=>{
    setUpdateprice(e.target.value)
  }
  const changeimage=(e)=>{
    setUpdateimage(e.target.value)
  }
  const changedescription=(e)=>{
    setUpdatedescription(e.target.value)
  }
  const changeavailability=(e)=>{
    setUpdateAvailability(e.target.value);
  }
  const changereviews=(e)=>{
    setUpdateReviews(e.target.value);
  }
  const navigate = useNavigate();

  const toggleInput = (e) => {
    setGamename(e.target.value);
  };

  const toggleClick = async () => {
     await axios.post(`http://localhost:3002/update`, {
      gamename: gamename
    }).then((response)=>{
      setGameData(response.data);
      //console.log(response.data);
      setUpdateGamename(response.data.gamename);
      setUpdateprice(response.data.price);
      setUpdateimage(response.data.image);
      setUpdatedescription(response.data.details);
      setUpdateAvailability(response.data.available);
      setUpdateReviews(response.data.reviews);
    }).catch((err)=>{
      console.log(err);
    }).finally(navigate(`/update`))
  };
  const toggleupdate=async()=>{
    const alldata = {
      gamename : updateGamename,
      price : updateprice,
      image : updateimage,
      details : updatedescription,
      available : updateAvailability,
      reviews : updateReviews
    }
    //console.log(alldata);
    await axios.put(`http://localhost:3002/update/${gamename}`,alldata).then((response)=>{
      alert('Data updated');
      navigate('/update');
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>
      <Header />
      <div>
        <center>
        <input type='text' placeholder='Assassins Creed' onChange={toggleInput} />
        <button onClick={toggleClick}>Search</button></center>
        {
          gameData.gamename ? <div>
            <center>
            <h1>Game is available</h1>
            <input type='text' onChange={changename} placeholder='changename'/>
            <input type='text' onChange={changeprice} placeholder='changeprice'/><br/>
            <input type='text' onChange={changeimage} placeholder='changeimage'/>
            <input type='text' onChange={changedescription} placeholder='changedescription'/><br/>
            <input type='text' onChange={changereviews} placeholder='changereviews'/>
            <input type='text'placeholder='true/false' onChange={changeavailability} />
            </center>
            <center>
              <button onClick={toggleupdate}>Update</button>
            </center>
          </div> : <center>Game Not Found</center>
        }
      </div>
    </div>
  );
};

export default Update;