import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  function handleSearchChange(event) {
    const input = event.target.value;
    setSearchTerm(input);

    const newFilteredProducts = products.filter((product) => {
      return product.title
        .toLowerCase()
        .split(" ")
        .some((word) => word.startsWith(input));
    });

    setFilteredProducts(newFilteredProducts);
  }
  return (
    <div className="flex justify-center mt-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border-2 border-gray-400 p-2 rounded-lg"
        />
        {searchTerm && (
          <ul className="absolute bg-white w-full border rounded z-10">
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                className="p-2 cursor-pointer"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                <div className="flex items-center">
                  <img
                    src={product.image.url}
                    alt={product.title}
                    className="w-10 h-10"
                  />
                  <h2 className="ml-2">{product.title}</h2>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
