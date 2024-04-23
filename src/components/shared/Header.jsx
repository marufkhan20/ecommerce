"use client";
import { menus } from "@/constants";
import { useCartStore } from "@/providers/CartStoreProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import MobileNav from "./MobileNav";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const pathname = usePathname();

  const { products } = useCartStore();
  return (
    <header
      className={`${
        pathname === "/" ? "absolute" : "bg-white"
      } top-0 left-0 right-0 w-full z-40 py-8`}
    >
      <div className="container flex items-center justify-between gap-5 flex-wrap">
        <Link href="/" className="text-primary font-bold text-2xl">
          Logo Here
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-5">
            {menus?.map((menu) => (
              <li
                className="font-semibold text-black cursor-pointer flex items-center gap-2 transition-all hover:text-primary relative menu"
                key={menu?.name}
              >
                <Link href={menu?.href}>{menu?.name}</Link>
                {menu?.subMenu?.length > 0 && <FaAngleDown />}

                {menu?.subMenu?.length > 0 && (
                  <ul className="absolute top-[200%] bg-white px-8 py-10 min-w-[280px] flex flex-col gap-4 text-secondary text-sm transition-all opacity-0 invisible translate-y-5 rounded-lg">
                    {menu?.subMenu?.map((item) => (
                      <li
                        className="transition-all hover:ml-2 font-medium hover:text-primary"
                        key={item}
                      >
                        <Link href={`categories/${item}`}>{item}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:flex items-center gap-5">
          <Link href="#" onClick={() => setSearchBar(true)}>
            <img src="/images/icons/search.png" className="w-5" alt="search" />
          </Link>
          <Link href="/auth">
            <img src="/images/icons/user.png" className="w-5" alt="user" />
          </Link>
          <Link href="#">
            <img src="/images/icons/star.png" className="w-5" alt="star" />
          </Link>
          <Link href="/cart" className="relative">
            <img src="/images/icons/cart.png" className="w-5" alt="cart" />
            <span className="absolute w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center top-[-50%] right-[-50%] text-sm">
              {products?.length}
            </span>
          </Link>
        </div>

        <FaBars
          onClick={() => setOpenNav(true)}
          className="block lg:hidden text-lg cursor-pointer"
        />
      </div>

      {/* mobile nav */}
      <MobileNav openNav={openNav} setOpenNav={setOpenNav} />

      {/* search bar */}
      <div
        className={`transition-all duration-300 ${
          searchBar ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed top-0 left-0 right-0 w-full bg-white py-7`}
      >
        <div className="container flex items-center gap-5">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none text-2xl w-full"
          />
          <GrClose
            className="text-2xl cursor-pointer"
            onClick={() => setSearchBar(false)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
