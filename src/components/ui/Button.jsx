import { cn } from "@/lib/utills";
import Link from "next/link";

const Button = ({
  type = "button",
  variant = "primary",
  onClick,
  className = "",
  href,
  children,
  ...rest
}) => {
  const styles = `
    font-bold text-sm px-9 py-4 rounded-full transition-all ${
      variant === "primary" &&
      "bg-primary text-white hover:bg-black hover:text-white"
    } ${
    variant === "secondary" &&
    "bg-white text-black hover:bg-black hover:text-white"
  } ${variant === "dark" && "bg-black text-white hover:bg-primary"}
  `;

  return href ? (
    <Link href={href} className={cn(styles, className)}>
      {children}
    </Link>
  ) : (
    <button
      type={type}
      onClick={onClick}
      {...rest}
      className={cn(styles, className)}
    >
      {children}
    </button>
  );
};

export default Button;
