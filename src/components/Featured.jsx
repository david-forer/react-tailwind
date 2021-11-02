import React from "react";

const Featured = ({productInfo}) => {
  const { id, title, price, description, category, image, rating } =
    productInfo;
    console.log(productInfo)

    return (
        <div className="2xl:mx-auto 3xl:container bg-gray-50 ">
            <div className="lg:px-60 md:px-6 px-4 md:py-12 py-8">
                <h1 className="text-4xl font-semibold leading-9 text-center text-gray-900 p-8">Featured Products</h1>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-8 gap-x-6 gap-y-36 mt-40">
                    <div className="lg:w-72 h-60 bg-white shadow rounded flex flex-col items-center relative ">
                        <img src={productInfo[1].image} alt="desk chair" className="w-36 h-56 absolute -mt-28" />
                        <p className="text-3xl font-bold text-gray-900 mt-36">${productInfo[1].price}</p>
                        <p className="text-l leading-5 px-2 mt-2 text-gray-700 ">{productInfo[1].title}</p>
                    </div>
                    <div className="lg:w-72 h-60 bg-white relative shadow rounded flex flex-col items-center">
                        <img src={productInfo[16].image} alt="sofa chair" className="w-36 h-56 absolute -mt-28" />
                        <p className="text-3xl font-bold text-gray-900 mt-36">${productInfo[16].price}</p>
                        <p className="text-l leading-5 px-2 mt-2 text-gray-700">{productInfo[16].title}</p>
                    </div>
                    <div className="lg:w-72 h-60 bg-white relative shadow rounded flex flex-col items-center">
                        <img src={productInfo[12].image} alt="bedroom chair" className="w-36 h-56 absolute -mt-28" />
                        <p className="text-3xl font-bold text-gray-900 mt-36">${productInfo[12].price}</p>
                        <p className="text-l leading-5 px-2 mt-2 text-gray-700">{productInfo[12].title}</p>
                    </div>
                    <div className="lg:w-72 h-60 bg-white relative shadow rounded flex flex-col items-center">
                        <img src={productInfo[8].image} alt="lounge chair" className="w-36 h-56 absolute -mt-28" />
                        <p className="text-3xl font-bold text-gray-900 mt-36">${productInfo[8].price}</p>
                        <p className="text-l leading-5 px-2 mt-2 text-gray-700">{productInfo[8].title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
