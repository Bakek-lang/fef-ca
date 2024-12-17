import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    console.log("cart items: ", cartItems);
    setCartItems((prevItems) => [...prevItems, product]);
  }

  function getTotal() {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
