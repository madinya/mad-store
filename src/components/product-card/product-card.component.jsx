import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import ButtonCustom from "../button/button.component";
import "./product-card.style.scss";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addItemHandler = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonCustom buttonType="inverted" onClick={addItemHandler}>
        {" "}
        Add to the cart
      </ButtonCustom>
    </div>
  );
};

export default ProductCard;
