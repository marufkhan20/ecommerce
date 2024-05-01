"use client";
import Breadcumb from "@/components/shared/Breadcumb";
import { useAuthStore } from "@/providers/AuthStoreProvider";
import { useRouter } from "next/navigation";
import Sidebar from "./_components/Sidebar";

const MyAccountLayout = ({ children }) => {
  const router = useRouter();
  const { token } = useAuthStore();

  if (!token) {
    router.push("/auth");
  }
  return (
    <main>
      <Breadcumb title="Dashboard" pathnames={["Home", "My Account"]} />
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10 py-20">
          <Sidebar />
          <div className="account-content">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default MyAccountLayout;
