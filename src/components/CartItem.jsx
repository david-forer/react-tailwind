import React, { useContext } from "react";
import CartContext from "../context/cart/CartContext";

// import formatCurrency from 'format-currency';

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  // let opts = { format: "%s%v", symbol: "€" };

  return (
    <li>
      <div className="cart-container grid grid-cols-[repeat(4,auto)] gap-y-8 gap-x-4 justify-between">
        <div className="">
          <img src={item.image} alt={item.title} className="w-16" />
        </div>
        <div className="">{item.title}</div>
        <div className=""> {item.price}</div>
        <div className="">
          <button className="text-center" onClick={() => removeItem(item._id)}>
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
