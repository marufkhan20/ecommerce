"use client";
import { cn } from "@/lib/utills";
import Link from "next/link";
import Loading from "./Loading";

const Button = ({
  type = "button",
  className = "",
  href = "",
  children,
  onClick,
  loading,
}) => {
  return (
    <button
      type={type}
      className={cn(
        "py-2 px-4 rounded-[7px] bg-primary text-white text-[15px]  transition-all hover:bg-[#4570EA]",
        className
      )}
      onClick={onClick}
    >
      {href ? (
        <Link href={href}>{children}</Link>
      ) : loading ? (
        <Loading className="w-7 h-7" />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
