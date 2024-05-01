"use client";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { AuthStoreProvider } from "@/providers/AuthStoreProvider";
import { CartStoreProvider } from "@/providers/CartStoreProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const queryClient = new QueryClient();

const layout = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthStoreProvider>
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
      </AuthStoreProvider>
    </QueryClientProvider>
  );
};

export default layout;
