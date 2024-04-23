"use client";

import { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

import { createCartStore } from "@/stores/cartStore";

export const CartStoreContext = createContext(null);

export const CartStoreProvider = ({ children }) => {
  const storeRef = useRef();
  // const [cartItems, setCartItems] = useState([]);
  let cartItems = [];

  // useEffect(() => {
  if (typeof window !== "undefined") {
    let storedData = localStorage.getItem("cartItems");
    storedData = JSON.parse(storedData);
    // Set the data in state
    cartItems = storedData || [];
  }
  // }, []);

  if (!storeRef.current) {
    storeRef.current = createCartStore({
      products: cartItems,
    });
  }

  return (
    <CartStoreContext.Provider value={storeRef.current}>
      {children}
    </CartStoreContext.Provider>
  );
};

export const useCartStore = (selector) => {
  const cartStoreContext = useContext(CartStoreContext);

  if (!cartStoreContext) {
    throw new Error(`useCartStore must be use within CartStoreProvider`);
  }

  return useStore(cartStoreContext, selector);
};
