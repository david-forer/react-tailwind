import React, {useState, useEffect} from 'react'
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
// import {Link} from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false)

  useEffect(async() => {
    const products = await fetch('https://fakestoreapi.com/products/').then(res=>res.json())
    setLoading(true)
    setProducts(products)
console.log(products)
    
  }, [])

  return (
    <div>
    <h1 className="text-center text-6xl font-bold mb-24 mt-10">Our Current Products</h1>
       {/* { products && <ProductCard productInfo={products} />} */}
       {loading ? ( products && <ProductCard productInfo={products} /> ) : <Loader />}
    </div>
  )
}

export default Products
