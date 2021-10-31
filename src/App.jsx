import React, {useState, useEffect} from 'react';
import Router from './components/Router';
import Product from './components/Product';

function App() {
  const [productData, setProductData] = useState();

  useEffect(async() => {
    const productData = await fetch('https://fakestoreapi.com/products/').then(res=>res.json())

    setProductData(productData)

    // console.log(productData)
  }, [])


  return (
    <>
    <Router />
    { productData && <Product productInfo={productData} />}
    </>
  )
}

export default App
