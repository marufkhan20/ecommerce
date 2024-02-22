"use client";
import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FiUploadCloud } from "react-icons/fi";
import Button from "../ui/Button";
import Reviews from "./reviews";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [image, setImage] = useState("");
  const [brandText, setBrandText] = useState("");

  const captureImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-14">
          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              <div className="w-[100px] h-[100px] rounded-3xl overflow-hidden">
                <img
                  src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_4-150x150.jpg"
                  alt="product"
                  className="w-full h-full cursor-pointer opacity-55 transition-all hover:opacity-100"
                />
              </div>
              <div className="w-[100px] h-[100px] rounded-3xl overflow-hidden">
                <img
                  src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_7_1-150x150.jpg"
                  alt="product"
                  className="w-full h-full cursor-pointer opacity-55 transition-all hover:opacity-100"
                />
              </div>
              <div className="w-[100px] h-[100px] rounded-3xl overflow-hidden">
                <img
                  src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_7-150x150.jpg"
                  alt="product"
                  className="w-full h-full cursor-pointer opacity-55 transition-all hover:opacity-100"
                />
              </div>
            </div>
            <div className="relative h-fit overflow-hidden">
              <img
                src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/product_4.jpg"
                alt="product"
                className="w-full h-fit rounded-3xl"
              />

              {image && (
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex justify-center items-center">
                  <img src={image} alt="brand image" />
                </div>
              )}

              {brandText && (
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex justify-center items-center text-center w-full">
                  <h2 className="text-2xl">{brandText}</h2>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="pb-4 border-b">
              <h4 className="text-[#48db45] text-sm">IN STOCK</h4>
              <h2 className="font-extrabold leading-[36px] text-[36px] mt-2">
                Plain Postal Boxes
              </h2>

              <div className="flex items-center gap-2 mt-4">
                <div className="flex items-center gap-1">
                  <FaStar className="text-[#F7AC2D]" />
                  <FaStar className="text-[#F7AC2D]" />
                  <FaStar className="text-[#F7AC2D]" />
                  <FaStar className="text-[#F7AC2D]" />
                  <FaRegStar />
                </div>
                <span className="font-medium text-xs">(5 Reviews)</span>
              </div>

              <div className="flex items-end gap-2 mt-7">
                <h2 className="text-[#e84040] text-[36px] leading-[36px] font-semibold">
                  $7.41
                </h2>
                <span className="text-sm font-semibold">$9.67</span>
              </div>

              <div>
                <h4 className="text-base mt-5">Size</h4>
                <div className="flex items-center flex-wrap gap-4 mt-2">
                  <button className="py-2 px-4 rounded-full border transition-all hover:bg-black hover:text-white hover:border-black">
                    S
                  </button>
                  <button className="py-2 px-4 rounded-full border transition-all hover:bg-black hover:text-white hover:border-black">
                    M
                  </button>
                  <button className="py-2 px-4 rounded-full border transition-all hover:bg-black hover:text-white hover:border-black">
                    L
                  </button>
                  <button className="py-2 px-4 rounded-full border transition-all hover:bg-black hover:text-white hover:border-black">
                    XL
                  </button>
                </div>
              </div>

              <h4 className="text-base mt-5">Colors</h4>
              <div className="flex items-center flex-wrap gap-4 mt-2">
                <button className="py-2 px-4 rounded-full border transition-all hover:bg-black hover:text-white hover:border-black">
                  Red
                </button>
                <button className="py-2 px-4 rounded-full border transition-all hover:bg-black hover:text-white hover:border-black">
                  Green
                </button>
                <button className="py-2 px-4 rounded-full border transition-all hover:bg-black hover:text-white hover:border-black">
                  Blue
                </button>
                <button className="py-2 px-4 rounded-full border transition-all hover:bg-black hover:text-white hover:border-black">
                  Yellow
                </button>
              </div>
            </div>

            <div className="py-5 border-b">
              <p>
                Nostrum ipsa id alias eos. Et iste est qui quaerat.
                Necessitatibus quibusdam est autem quis nisi.
              </p>

              <h4 className="text-base mt-10">Upload Designs</h4>

              <div className="p-5 border-2 border-dashed mt-5 flex items-center justify-center flex-wrap gap-4 rounded-3xl">
                <FiUploadCloud className="text-2xl" />
                <span className="text-black font-medium">
                  Drag & Drop Files Here
                </span>
                <span>or</span>
                <label
                  className="font-bold text-sm py-2 px-6 rounded-full transition-all cursor-pointer bg-black text-white hover:bg-primary"
                  htmlFor="logo"
                >
                  Browse Files
                </label>
                <input
                  onChange={captureImage}
                  type="file"
                  id="logo"
                  className="hidden"
                />
              </div>

              <div>
                <label
                  htmlFor="brand-name"
                  className="text-base mt-10 mb-2 inline-block font-medium text-black"
                >
                  Write Something
                </label>
                <input
                  type="text"
                  className="w-full border rounded-3xl bg-transparent outline-none p-5"
                  id="brand-name"
                  placeholder="Write something"
                  value={brandText}
                  onChange={(e) => setBrandText(e.target.value)}
                />
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 bg-[#EDEEF1]  p-3 rounded-full">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-white">
                    -
                  </div>
                  <input
                    type="text"
                    className="bg-transparent outline-none w-8 text-center text-sm"
                    value="1"
                  />
                  <div className="w-7 h-7 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-white">
                    +
                  </div>
                </div>

                <Button variant="dark" className="w-full">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* description */}
        <div className="mt-20 border-b flex items-center gap-6">
          <h2
            className={`pb-3 border-b-[3px] text-[22px] transition-all ${
              activeTab === 1
                ? "border-primary"
                : "border-transparent text-secondary cursor-pointer hover:border-primary hover:text-black"
            }`}
            onClick={() => setActiveTab(1)}
          >
            Description
          </h2>
          <h2
            className={`pb-3 border-b-[3px] text-[22px] transition-all ${
              activeTab === 2
                ? "border-primary"
                : "border-transparent text-secondary cursor-pointer hover:border-primary hover:text-black"
            }`}
            onClick={() => setActiveTab(2)}
          >
            Reviews (5)
          </h2>
        </div>

        <div className="mt-8 pb-20 border-b">
          {activeTab === 1 && (
            <>
              <p>
                Debitis illum id dolorum provident asperiores velit nobis.
                Provident a in quis autem. Blanditiis pariatur minus animi
                ducimus totam autem expedita exercitationem.
              </p>
              <p className="mt-2">
                Totam rerum qui laborum consequatur atque quae sunt.
                Necessitatibus libero id sit quia libero ex animi. Ullam quasi
                animi facilis nostrum vel. Qui magni sed voluptas minus esse
                voluptas.
              </p>
            </>
          )}

          {activeTab === 2 && <Reviews />}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
