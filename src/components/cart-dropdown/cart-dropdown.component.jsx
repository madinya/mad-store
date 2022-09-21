import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import ButtonCustom from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <ButtonCustom onClick={goToCheckoutHandler}>Go to checkout</ButtonCustom>
    </div>
  );
};

export default CartDropdown;
