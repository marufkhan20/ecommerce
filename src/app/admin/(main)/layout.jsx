"use client";
import { useAuthStore } from "@/providers/AuthStoreProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "../_components/Header";
import PrivateRoute from "../_components/PrivateRoute";
import Sidebar from "../_components/Sidebar";

const DashboardLayout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user, token } = useAuthStore();

  const router = useRouter();

  if (!user && !token) {
    return router.push("/admin/login");
  }
  return (
    <PrivateRoute>
      <main className="flex justify-between gap-8 pb-10 min-h-full bg-white">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <div className="min-h-screen pl-8 lg:p-0 w-custom-full">
          <Header setOpenSidebar={setOpenSidebar} />
          <div className="w-full pl-1 pr-8 xl:px-2 h-full xl:w-[75%] xl:mx-auto overflow-hidden">
            {children}
          </div>
        </div>
      </main>
    </PrivateRoute>
  );
};

export default DashboardLayout;
