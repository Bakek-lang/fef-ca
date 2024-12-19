import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartProvider";

export default function CheckoutPage() {
  const { cartItems, getTotal, clearCart, removeItemFromCart } = useCart();
  console.log("cartitems: ", cartItems, "GetTotal: ", getTotal);
  const navigate = useNavigate();

  function handleCheckout() {
    clearCart();
    navigate("/checkout-success");
  }

  const total = getTotal();

  return (
    <div className="ml-4">
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
            <p>{item.discountedPrice}$</p>
            <p>{item.quantity}</p>
            <div
              className=" cursor-pointer"
              onClick={() => removeItemFromCart(item.id)}
            >
              <FaTrash />
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-end max-w-5xl  mt-4">
        <p>Total: {total.toFixed(2)}$</p>
        {total > 0 ? (
          <button
            onClick={handleCheckout}
            className="bg-orange-400 rounded-lg py-2 px-4 max-w-32 "
          >
            Checkout
          </button>
        ) : (
          <div>
            <p>Your cart is empty.</p>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-blue-400 rounded-lg py-2 px-4"
            >
              Go Back to Store
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
