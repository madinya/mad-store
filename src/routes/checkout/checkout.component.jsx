import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div>
      {cartItems.map((item) => {
        const { id, name, quantity } = item;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br />
            <span onClick={() => removeItemFromCart(item)}>decrement</span>
            <br />
            <span onClick={() => addItemToCart(item)}>increase</span>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
