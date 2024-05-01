"use client";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import Breadcumb from "@/components/shared/Breadcumb";
import { useAuthStore } from "@/providers/AuthStoreProvider";
import { useRouter } from "next/navigation";

const AuthPage = () => {
  const router = useRouter();
  const { token } = useAuthStore();

  if (token) {
    router.push("/my-account");
  }

  return (
    <main>
      <Breadcumb title="My Account" pathnames={["Home", "My Account"]} />

      <section className="py-24 grid sm:grid-cols-2 w-full px-5 sm:px-0 sm:w-[90%] lg:w-[80%] xl:w-[60%] mx-auto">
        <Login />
        <Signup />
      </section>
    </main>
  );
};

export default AuthPage;
