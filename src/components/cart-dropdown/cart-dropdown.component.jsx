import ButtonCustom from "../button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <ButtonCustom>Go to checkout</ButtonCustom>
    </div>
  );
};

export default CartDropdown;
