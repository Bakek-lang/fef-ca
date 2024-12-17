import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartProvider";

export default function CheckoutPage() {
  const { cartItems, getTotal } = useCart();
  console.log("cartitems: ", cartItems, "GetTotal: ", getTotal);
  const navigate = useNavigate();

  function handleCheckout() {
    navigate("/checkout-success");
  }

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title} - {item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: {getTotal()}</p>
      <button
        onClick={handleCheckout}
        className="bg-orange-400 rounded-lg py-2 px-4"
      >
        Checkout
      </button>
    </div>
  );
}
