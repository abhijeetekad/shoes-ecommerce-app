import { useProduct } from "../../Context/ProductContext";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.css";
const ProductList = () => {
  const { productList } = useProduct();

  return (
    <div className="container">
      <h1>Showing All Products</h1>
      <div className="products">
        {productList.map((productInfo) => {
          return <ProductCard productInfo={productInfo} />;
        })}
      </div>
    </div>
  );
};
export { ProductList };
