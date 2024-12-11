import CartIcon from "./CartIcon";

export default function Header() {
  return (
    <header className="flex">
      <nav className="flex">
        <a className="  font-extrabold">Products</a>
        <a className=" font-extrabold">Contact</a>
      </nav>
      <CartIcon />
    </header>
  );
}
