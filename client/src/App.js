import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/home'
import Shopping from './components/shopping'
import Update from './components/update'
import Cart from './components/cart'
// import Paymentform from './components/paymentform'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/shopping' element={<Shopping/>}/>
        <Route path='/update' element={<Update/>}/>
        <Route path='/cart' element={<Cart/>}/>
     
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App                     