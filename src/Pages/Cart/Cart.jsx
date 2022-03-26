import { CartList } from "../../Components/Cartlist/CartList";
import { CartPrice } from "../../Components/CartPrice/CartPrice";
import { useCart } from "../../Context/CartContext";
import "./Cart.css";
const Cart = () => {
  const { cartState } = useCart();
  return (
    <div>
      <h1>Cart ({cartState.cart.length})</h1>
      <br />
      <br />
      <div className="final-checkout">
        <CartPrice />
        <CartList />
      </div>
    </div>
  );
};
export { Cart };
