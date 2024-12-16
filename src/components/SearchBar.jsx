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
      console.log("product title: ", product.title);
      return product.title.toLowerCase().includes(input.toLowerCase());
    });

    setFilteredProducts(newFilteredProducts);
    console.log("Filtered products: ", filteredProducts);
  }
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border-2 border-gray-400 p-2 rounded-lg"
      />
      {searchTerm && (
        <ul className="absolute bg-white border rounded w-full z-10">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className="p-2 cursor-pointer"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
