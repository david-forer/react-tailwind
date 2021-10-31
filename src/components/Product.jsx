import React from "react";

const Product = ({ productInfo }) => {
  const { id, title, price, description, category, image, rating } =
    productInfo;

  return (
    <>
     <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
      {productInfo.map((product) => (
       
       
                        <div className="relative pt-16 pb-24 bg-gray-50 px-16 flex justify-center items-center" key={product.id}>
                            <img className src={product.image} alt="laptop-1" />
                            
                            <div className="flex flex-col absolute bottom-4 left-4 w-full pr-8">
                                <div>
                                    <p className="text-base leading-none text-gray-600">{product.title}</p>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <div>
                                        <p className="text-base font-semibold leading-none text-gray-800">{product.price}</p>
                                    </div>
                                    <div className>
                                        <svg width={88} height={16} viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.00001 11.8334L3.88535 13.9967L4.67135 9.41472L1.33801 6.17005L5.93801 5.50338L7.99535 1.33472L10.0527 5.50338L14.6527 6.17005L11.3193 9.41472L12.1053 13.9967L8.00001 11.8334Z" fill="#FBBF24" stroke="#FBBF24" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M32 11.8334L27.8853 13.9967L28.6713 9.41472L25.338 6.17005L29.938 5.50338L31.9953 1.33472L34.0527 5.50338L38.6527 6.17005L35.3193 9.41472L36.1053 13.9967L32 11.8334Z" fill="#FBBF24" stroke="#FBBF24" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M56 11.8334L51.8853 13.9967L52.6713 9.41472L49.338 6.17005L53.938 5.50338L55.9953 1.33472L58.0527 5.50338L62.6527 6.17005L59.3193 9.41472L60.1053 13.9967L56 11.8334Z" fill="#FBBF24" stroke="#FBBF24" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M80 11.8334L75.8853 13.9967L76.6713 9.41472L73.338 6.17005L77.938 5.50338L79.9953 1.33472L82.0527 5.50338L86.6527 6.17005L83.3193 9.41472L84.1053 13.9967L80 11.8334Z" fill="#FBBF24" stroke="#FBBF24" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                       

      ))}
      </div>
    </>
  );
};

export default Product;
