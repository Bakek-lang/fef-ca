import { Link } from "react-router-dom";

export default function CheckoutSuccessPage() {
  return (
    <div>
      <h1>Checkout SuccessFul</h1>
      <p className="mb-4">
        Your order has been placed. Than you for your purchase!
      </p>
      <Link className="bg-orange-400 py-4 px-2 rounded-lg" to="/">
        Return to Store
      </Link>
    </div>
  );
}
