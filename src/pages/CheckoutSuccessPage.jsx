import { Link } from "react-router-dom";

export default function CheckoutSuccessPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className=" text-2xl font-bold">Checkout Successful</h1>
      <p className="mb-4">
        Your order has been placed. Thank you for your purchase!
      </p>
      <Link className="bg-orange-400 py-4 px-2 rounded-lg" to="/">
        Return to Store
      </Link>
    </div>
  );
}
