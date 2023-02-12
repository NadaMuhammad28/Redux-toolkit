import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { removeItem, increaseItem, decrease } from "../features/cart/CartSlice";

import { useDispatch } from "react-redux";
import { store } from "../store";
const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">$ {price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className="amount-btn"
          onClick={() => dispatch(increaseItem(id))}
        >
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) return dispatch(removeItem(id));
            dispatch(decrease(id));
          }}
        >
          <ChevronDown />
        </button>
        {/* <Modal /> */}
      </div>
    </article>
  );
};
export default CartItem;
