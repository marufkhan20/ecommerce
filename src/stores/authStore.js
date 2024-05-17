import { createStore } from "zustand/vanilla";

export const defaultInitState = {
  token: undefined,
  user: undefined,
};

export const createAuthStore = (initState = defaultInitState) => {
  return createStore()((set) => ({
    ...initState,
    login: (data) =>
      set((state) => {
        state.token = data?.token;
        state.user = data?.user;

        localStorage.setItem(
          "auth",
          JSON.stringify({
            token: data?.token,
            user: data?.user,
          })
        );

        return state;
      }),
    logout: () =>
      set((state) => {
        state.token = undefined;
        state.user = undefined;

        localStorage.removeItem("auth");

        return state;
      }),
  }));
};
