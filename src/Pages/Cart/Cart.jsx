import { CartList } from "../../Components/Cartlist/CartList";
import { CartPrice } from "../../Components/CartPrice/CartPrice";
import { useCart } from "../../Context/CartContext";
import "./Cart.css";
const Cart = () => {
  const { cartState } = useCart();
  return (
    <div>
      {cartState.cart.length === 0 ? (
        <h1>Your cart is empty (0)</h1>
      ) : (
        <div>
          <h1 className="margin-4-rem">Cart ({cartState.cart.length})</h1>
          <div className="final-checkout">
            <CartPrice />
            <CartList />
          </div>
        </div>
      )}
    </div>
  );
};
export { Cart };
