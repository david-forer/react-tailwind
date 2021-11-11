import React, {useState, useEffect} from 'react';
import Router from './components/Router';
import Cart from "./components/Cart";
import Footer from "./components/Footer";


function App() {
const[cartItems, setCartItems] = useState([])


  return (
    <>
    <Router />
   <Cart />
   <Footer />
    </>
  )
}

export default App
