import CartIcon from "./CartIcon";
import { useCart } from "./CartProvider";
import NavBar from "./NavBar";

export default function Header() {
  const { cartItems } = useCart();

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="flex items-center justify-between bg-blue-400 px-4 ">
      <NavBar />
      <CartIcon itemCount={itemCount} />
    </header>
  );
}
