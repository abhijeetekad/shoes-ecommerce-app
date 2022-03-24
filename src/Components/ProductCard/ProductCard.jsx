import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ productInfo }) => {
  return (
    <div>
      <div className="shoe-card">
        <div>
          <img src={productInfo.image} />
        </div>
        <div className="card-desc">
          <h3>{productInfo.categoryName}</h3>
          <h2>{productInfo.title}</h2>
          <div className="card-price">
            <h4>Price: {productInfo.originalPrice}</h4>
            <p>Discount: {productInfo.discount}%</p>
            <h3>Discounted Price: Rs.{productInfo.discountedPrice}</h3>
            <p className="prod-rating">{productInfo.rating}⭐</p>
          </div>
        </div>
        <div className="card-btn">
          <button className="btn">Add to Wishlist</button>
          <button className="btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
export { ProductCard };
