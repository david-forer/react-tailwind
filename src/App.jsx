import React, {useState, useEffect} from 'react';
import Router from './components/Router';
import Cart from "./components/Cart";


function App() {
const[cartItems, setCartItems] = useState([])


  return (
    <>
    <Router />
   <Cart />
    </>
  )
}

export default App
