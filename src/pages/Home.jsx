import React, {useState, useEffect} from 'react'
import Product from './../components/Product';
import Highlight from './../components/Highlight';
import Hero from './../components/Hero';

function Home() {
  const [productData, setProductData] = useState();

  useEffect(async() => {
    const productData = await fetch('https://fakestoreapi.com/products/').then(res=>res.json())

    setProductData(productData)

    // console.log(productData)
  }, [])

  return (
    <div>
      
      <Hero />
      <Highlight />
      { productData && <Product productInfo={productData} />}
    </div>
  )
}

export default Home
