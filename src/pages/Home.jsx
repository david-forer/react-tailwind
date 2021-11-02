import React, {useState, useEffect} from 'react'
import ProductCard from '../components/ProductCard';
import Highlight from './../components/Highlight';
import Hero from './../components/Hero';
import Featured from './../components/Featured';
import Contact from './../components/Contact';
// import Loader from './../components/Loader';

function Home() {
  const [productData, setProductData] = useState();

  const url =`https://fakestoreapi.com/products/`

  useEffect(async() => {
    
    const productData = await fetch(url).then(res=>res.json())

    setProductData(productData)

    
  }, [url])

  return (
    <div>
      
      <Hero />
      {/* if(product.loading){
        <Loader />
      } */}
      { productData && <Featured productInfo={productData} />}
      <Highlight />
      <Contact />
    </div>
  )
}

export default Home
