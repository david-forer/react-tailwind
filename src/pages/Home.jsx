import React, {useState, useEffect} from 'react'
import ProductCard from '../components/ProductCard';
import Highlight from './../components/Highlight';
import Hero from './../components/Hero';
import Featured from './../components/Featured';

function Home() {
  const [productData, setProductData] = useState();

  useEffect(async() => {
    const productData = await fetch('https://fakestoreapi.com/products/').then(res=>res.json())

    setProductData(productData)

    
  }, [])

  return (
    <div>
      
      <Hero />
      { productData && <Featured productInfo={productData} />}
      <Highlight />
      
    </div>
  )
}

export default Home
