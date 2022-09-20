import ButtonCustom from "../button/button.component";
import "./product-card.style.scss";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonCustom buttonType="inverted"> Add to the cart</ButtonCustom>
    </div>
  );
};

export default ProductCard;
