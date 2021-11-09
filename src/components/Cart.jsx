import React, {useContext, useState} from "react";
import CartContext from "../context/cart/CartContext";
import CartItem from "./CartItem";


const Cart = () => {
  const [show, setshow] = useState(true);
const { showCart, cartItems, showHideCart} = useContext(CartContext)

console.log(cartItems)
  return (
    <>
    {showCart && (
        <div className=''>
          <div className="">
            <i
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              aria-hidden='true'
              onClick={showHideCart}
            ></i>
          
          <div className=''>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            )}
            
          </div>
          <div className=''>
            <div>Cart Total</div>
            
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
