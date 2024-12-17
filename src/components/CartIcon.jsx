import { IoCartSharp } from "react-icons/io5";
export default function CartIcon({ itemCount }) {
  console.log("itemcount in cartIcon component: ", itemCount);
  return (
    <div className="relative">
      <IoCartSharp size={42} />
      {itemCount > 0 && (
        <span className="absolute top-0 right-0 rounded-full bg-red-600 text-white h-4 w-4 flex justify-center items-center p-2">
          {itemCount}
        </span>
      )}
    </div>
  );
}
