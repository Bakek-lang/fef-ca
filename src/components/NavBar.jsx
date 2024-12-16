import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex">
        <li className="p-2">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="p-2">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
