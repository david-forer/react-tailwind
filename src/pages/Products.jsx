import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";


const URL = "https://fakestoreapi.com/products/";

const Products = () => {
  const { loading, error, data } = useFetch(URL);
  
  if (loading) return <Loader />;
  if (error) return " Something Went Wrong!";

  return (
    <div>
      <h1 className="text-center text-6xl font-bold mb-24 mt-10">
        Our Current Products
      </h1>
     
      { data && <ProductCard productInfo={data} />}
    </div>
  );
};

export default Products;
