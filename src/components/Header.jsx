import CartIcon from "./CartIcon";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-blue-400">
      <NavBar />
      <CartIcon />
    </header>
  );
}
