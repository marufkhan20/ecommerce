import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import Button from "../ui/Button";

const Footer = () => {
  return (
    <footer className="bg-[#2D3759] text-white">
      <div className="container">
        <div className="py-14 flex-col sm:flex-row border-b border-gray-600 flex items-center justify-between gap-8">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-7 py-5 bg-white rounded-full outline-none text-secondary"
          />
          <div>
            <Button className="py-5">Subscribe</Button>
          </div>
        </div>

        <div className="border-b border-gray-600 py-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <Link className="font-semibold text-2xl" href="/">
              Logo Here
            </Link>
            <p className="my-5">
              As a car owner, you have to recognize that your vehicle requires a
              lot of care to keep running in optimum shape.
            </p>
            <ul className="flex items-center gap-3">
              <li className="w-8 h-8 rounded-full border border-white text-white flex items-center justify-center cursor-pointer transition-all hover:border-primary hover:text-primary">
                <Link href="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li className="w-8 h-8 rounded-full border border-white text-white flex items-center justify-center cursor-pointer transition-all hover:border-primary hover:text-primary">
                <Link href="#">
                  <FaTwitter />
                </Link>
              </li>
              <li className="w-8 h-8 rounded-full border border-white text-white flex items-center justify-center cursor-pointer transition-all hover:border-primary hover:text-primary">
                <Link href="#">
                  <FaInstagram />
                </Link>
              </li>
              <li className="w-8 h-8 rounded-full border border-white text-white flex items-center justify-center cursor-pointer transition-all hover:border-primary hover:text-primary">
                <Link href="#">
                  <FaPinterest />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg mb-5">Get In Touch</h3>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
            <p className="mt-1">support@example.com</p>
            <h2 className="text-xl text-white mt-1">+ (406) 555-0120</h2>
          </div>

          <div className="text-white">
            <h3 className="text-white text-lg mb-5">Information</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#">Help Center</Link>
              </li>
              <li>
                <Link href="#">Shipping</Link>
              </li>
              <li>
                <Link href="#">Returns</Link>
              </li>
              <li>
                <Link href="#">Policies</Link>
              </li>
              <li>
                <Link href="#">Gift Cards</Link>
              </li>
            </ul>
          </div>

          <div className="text-white">
            <h3 className="text-white text-lg mb-5">Useful links</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#">My Account</Link>
              </li>
              <li>
                <Link href="#">Order Tracking</Link>
              </li>
              <li>
                <Link href="#">All Products</Link>
              </li>
              <li>
                <Link href="#">All Services</Link>
              </li>
              <li>
                <Link href="#">Service Details</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-9 flex items-center gap-5 justify-between flex-wrap">
          <p>Copyright © 2023 Company Name. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
