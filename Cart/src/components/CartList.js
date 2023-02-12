import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";
import Modal from "./Modal";

import { caclTotals, getcartitems } from "../features/cart/CartSlice";
import { useEffect } from "react";

const CartList = () => {
  const { cart, amount, total } = useSelector((store) => store.cart);
  const { isModalOpen } = useSelector((store) => store.modal);
  console.log(isModalOpen);
  const dipatch = useDispatch();

  useEffect(() => {
    dipatch(caclTotals());
  }, [cart]);

  if (amount < 1)
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>$ {total}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dipatch(openModal());
          }}
        >
          clear cart
        </button>
      </footer>
      {isModalOpen && <Modal />}
    </section>
  );
};

export default CartList;
