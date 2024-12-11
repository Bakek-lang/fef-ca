import CartIcon from "./CartIcon";

export default function Header() {
  return (
    <header className="flex bg-red-600">
      <nav>
        <h1 className=" bg-red-700 font-extrabold">Home</h1>
      </nav>
      <CartIcon />
    </header>
  );
}
