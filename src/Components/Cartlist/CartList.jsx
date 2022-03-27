import { useCart } from "../../Context/CartContext";

const CartList = () => {
  const { cartState, dispatchCart } = useCart();

  return (
    <>
      <div className="cart-products">
        {cartState.cart.map((cartCard) => {
          return (
            <div className="checkout-list">
              <div className="product-img">
                <img src={cartCard.image} />
              </div>
              <div className="product-info">
                <p>{cartCard.title}</p>
                <hr />
                <p>Final Price: RS. {cartCard.discountedPrice}</p>
                <div className="product-count">
                  <button
                    className="decrement-btn"
                    onClick={() =>
                      dispatchCart({
                        type: "DECREMENT_ITEMS",
                        payload: cartCard,
                      })
                    }
                  >
                    -
                  </button>
                  <div className="count">{cartCard.cartQuantity}</div>
                  <button
                    className="increment-btn"
                    onClick={() =>
                      dispatchCart({
                        type: "INCREMENT_ITEMS",
                        payload: cartCard,
                      })
                    }
                  >
                    +
                  </button>
                </div>
                <div className="checkout-btn">
                  <button className="cart-btn">BUY</button>
                  <button className="cart-btn">REMOVE</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export { CartList };
