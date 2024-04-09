"use client";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const queryClient = new QueryClient();

const layout = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProgressBar
        height="2px"
        color="#7000FE"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <Header />
      {children}
      <Footer />
    </QueryClientProvider>
  );
};

export default layout;
