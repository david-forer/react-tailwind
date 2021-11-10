import React, {useContext, useState} from "react";
import CartContext from "../context/cart/CartContext";
import CartItem from "./CartItem";
import './cart.css'


const Cart = () => {
 
const { showCart, cartItems, showHideCart} = useContext(CartContext)

console.log(cartItems)
  return (
    <>
    {showCart && (
        <div className='cart__wrapper'>
          <div className="">
            <i
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              aria-hidden='true'
              onClick={showHideCart}
            ></i>
          
          <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </ul>
            )}
            
          </div>
          <div className='Cart__cartTotal'>
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {cartItems.reduce((amount, item) => item.price + amount), 0}
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
