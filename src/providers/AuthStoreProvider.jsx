"use client";

import { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

import { createAuthStore } from "@/stores/authStore";

export const AuthStoreContext = createContext(null);

export const AuthStoreProvider = ({ children }) => {
  const storeRef = useRef();
  const auth = {
    token: undefined,
    user: undefined,
  };

  if (typeof window !== "undefined") {
    let storedData = localStorage.getItem("auth");
    storedData = JSON.parse(storedData);
    // Set the data in state
    if (storedData) {
      auth.token = storedData?.token;
      auth.user = storedData?.user;
    }
  }

  if (!storeRef.current) {
    storeRef.current = createAuthStore(auth);
  }

  return (
    <AuthStoreContext.Provider value={storeRef.current}>
      {children}
    </AuthStoreContext.Provider>
  );
};

export const useAuthStore = (selector) => {
  const authStoreContext = useContext(AuthStoreContext);

  if (!authStoreContext) {
    throw new Error(`useAuthStore must be use within AuthStoreProvider`);
  }

  return useStore(authStoreContext, selector);
};
