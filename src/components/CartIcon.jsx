import { IoCartSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export default function CartIcon({ itemCount }) {
  const navigate = useNavigate();

  function handleCartClick() {
    navigate("/checkout");
  }

  return (
    <div className="relative cursor-pointer" onClick={handleCartClick}>
      <IoCartSharp size={42} />
      {itemCount > 0 && (
        <span className="absolute top-0 right-0 rounded-full bg-red-600 text-white h-4 w-4 flex justify-center items-center p-2">
          {itemCount}
        </span>
      )}
    </div>
  );
}
