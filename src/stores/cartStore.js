import { createStore } from "zustand/vanilla";

export const defaultInitState = {
  cart: {
    items: {},
    totalQty: 0,
    totalPrice: 0,
  },
};

export const createCartStore = (initState = defaultInitState) => {
  return createStore()((set) => ({
    ...initState,
    addToCart: (product) =>
      set((state) => {
        const cart = state.cart;

        console.log("product from store", product);

        if (!cart?.items[product?.id]) {
          cart.items[product?.id] = {
            item: product,
            qty: 1,
          };
          cart.totalQty += 1;
          cart.totalPrice += Number(product?.price);
        } else {
          cart.items[product?.id].qty += 1;
          cart.totalQty += 1;
          cart.totalPrice += Number(product?.price);
        }
        // set in local storage
        localStorage.setItem("cart", JSON.stringify(cart));

        return { cart };
      }),
    updateQuantity: (id, qty, plus) =>
      set((state) => {
        const cart = state.cart;

        if (plus) {
          cart.items[id].qty += qty;
          cart.totalQty += qty;
          cart.totalPrice += Number(cart?.items[id].item?.price);
        } else {
          cart.totalQty -= qty;
          cart.totalPrice -= Number(cart?.items[id].item?.price);
          if (cart.items[id].qty - 1 === 0) {
            delete cart.items[id];
          } else {
            cart.items[id].qty -= qty;
          }
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        return { cart };
      }),
  }));
};
