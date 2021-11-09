import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CartContext from '../context/cart/CartContext'


const Product = () => {
  const [products, setProducts] = useState(null);
  const { id } = useParams();
	const { addToCart } = useContext(CartContext)

  const url = `https://fakestoreapi.com/products/${id}`;

  useEffect(async () => {
    const products = await fetch(url).then((res) => res.json());

    setProducts(products);
    // console.log(products)
  }, [url]);

  // const handleAddProduct = () => {
  //   addToCart()
  // };

  if (products) {
    return (
      <main className="flex items-center p-10 w-full h-full bg-white">
        <div className="border-t border-b pt-16 pb-16 grid grid-cols-2 gap-8">
          <div className="flex flex-col justify-start">
            <div className="flex flex-col w-full object-cover border rounded-lg overflow-hidden">
              <img
                className="w-2/3 h-full  object-cover "
                src={products.image}
                alt={products.title}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-4">
              <h1 className="capitalize text-4xl font-extrabold">
                {products.title}
              </h1>
              <h2 className="text-3xl">${products.price}</h2>
              <p className="text-lg text-gray-500	">{products.description}</p>
              <div className="flex items-center gap-4 my-6 cursor-pointer ">
                <div
                  className="bg-blue-600 px-5 py-3 text-white rounded-lg w-2/4 text-center"
                  onClick={() => addToCart(products)}
                >
                  Add to Cart
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return <div></div>;
};

export default Product;
