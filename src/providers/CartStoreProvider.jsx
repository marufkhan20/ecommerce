"use client";

import { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

import { createCartStore } from "@/stores/cartStore";

export const CartStoreContext = createContext(null);

export const CartStoreProvider = ({ children }) => {
  // get cart data from localStorage
  let cartItems = localStorage.getItem("cartItems");
  cartItems = JSON.parse(cartItems);

  const storeRef = useRef();
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
