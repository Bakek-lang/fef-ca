import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    console.log("cart items: ", cartItems);
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === product.id);
      if (itemIndex > -1) {
        const newItems = [...prevItems];
        newItems[itemIndex] = {
          ...newItems[itemIndex],
          quantity: newItems[itemIndex].quantity + 1,
        };
        return newItems;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  }

  function getTotal() {
    return cartItems.reduce(
      (total, item) => total + item.discountedPrice * item.quantity,
      0
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
