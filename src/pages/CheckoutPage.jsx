import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartProvider";

export default function CheckoutPage() {
  const { cartItems, getTotal, clearCart } = useCart();
  console.log("cartitems: ", cartItems, "GetTotal: ", getTotal);
  const navigate = useNavigate();

  function handleCheckout() {
    clearCart();
    navigate("/checkout-success");
  }

  return (
    <div>
      <h1 className="text-2xl flex justify-center">Checkout</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li
            className="flex border border-black justify-between items-center max-w-5xl p-2 "
            key={index}
          >
            <img
              className="rounded-md h-32"
              src={item.image.url}
              alt={item.title}
            />
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
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
