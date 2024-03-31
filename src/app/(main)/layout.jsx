"use client";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const layout = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {children}
      <Footer />
    </QueryClientProvider>
  );
};

export default layout;
