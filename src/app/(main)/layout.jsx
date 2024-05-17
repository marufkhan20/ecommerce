"use client";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { CartStoreProvider } from "@/providers/CartStoreProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const queryClient = new QueryClient();

const layout = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartStoreProvider>
        <ProgressBar
          height="2px"
          color="#7000FE"
          options={{ showSpinner: false }}
          shallowRouting
        />
        <Header />
        {children}
        <Footer />
      </CartStoreProvider>
    </QueryClientProvider>
  );
};

export default layout;
