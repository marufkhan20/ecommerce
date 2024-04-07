"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const queryClient = new QueryClient();

const layout = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProgressBar
        height="2px"
        color="#7000FE"
        options={{ showSpinner: true }}
        shallowRouting
      />
      {children}
    </QueryClientProvider>
  );
};

export default layout;
