"use client";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {
  // const { accessToken, user } = useSelector((state) => state.auth || {});

  const router = useRouter();

  // return accessToken && user?._id ? children : router.push("/auth/login");
  return children;
};

export default PrivateRoute;
