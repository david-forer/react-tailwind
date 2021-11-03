import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Highlight from "./../components/Highlight";
import Hero from "./../components/Hero";
import Featured from "./../components/Featured";
import Contact from "./../components/Contact";
import Loader from "./../components/Loader";
import useFetch from "../hooks/useFetch";

 const URL = `https://fakestoreapi.com/products/`;

function Home() {
  const { loading, error, data } = useFetch(URL);
  
  if (loading) return <Loader />;
  if (error) return " Something Went Wrong!";


  return (
    <div>
      <Hero />

      {data && <Featured productInfo={data} />}
      <Highlight />
      <Contact />
    </div>
  );
}

export default Home;
