"use client";
import Link from "next/link";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import Button from "../../ui/Button";
import ViewProductImages from "./ViewProductImages";

const ProductItem = ({ image }) => {
  const [viewImages, setViewImages] = useState(false);
  return (
    <>
      <div className="bg-white p-5 rounded-3xl transition-all product-item relative">
        <div className="pb-5">
          <Link href="/products/single-product">
            <img
              className="rounded-3xl w-full h-full"
              src={image}
              alt="product"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Link href="/products/single-product">
            <h5 className="transition-all hover:text-primary">Sticker</h5>
          </Link>
          <h4 className="text-lg font-semibold">$9.50 - $39.95</h4>
          <div className="mt-7 w-full">
            <Link href="/products/single-product">
              <Button className="w-full" variant="dark">
                View Product
              </Button>
            </Link>
          </div>
        </div>

        <div className="product-item-opt opacity-0 invisible translate-y-2 transition-all duration-300 absolute top-5 right-8 flex flex-col gap-2">
          <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer transition-all hover:bg-primary hover:text-white">
            <FaRegStar />
          </div>
          <div
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer transition-all hover:bg-primary hover:text-white"
            onClick={() => setViewImages(true)}
          >
            <FaRegEye />
          </div>
          <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer transition-all hover:bg-primary hover:text-white">
            <TfiReload />
          </div>
        </div>
      </div>

      {/* view product images */}
      <ViewProductImages
        viewImages={viewImages}
        setViewImages={setViewImages}
      />
    </>
  );
};

export default ProductItem;
