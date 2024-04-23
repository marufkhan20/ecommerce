import { createStore } from "zustand/vanilla";

export const defaultInitState = {
  products: [],
};

export const createCartStore = (initState = defaultInitState) => {
  return createStore()((set) => ({
    ...initState,
    addToCart: (product) =>
      set((state) => {
        // set in local storage
        localStorage.setItem(
          "cartItems",
          JSON.stringify([...state.products, product])
        );

        return { products: [...state.products, product] };
      }),
  }));
};
