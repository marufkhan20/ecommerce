"use client";
import { toPng } from "html-to-image";
import { useRef, useState } from "react";
import Draggable from "react-draggable";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FiUploadCloud } from "react-icons/fi";
import Button from "../ui/Button";
import Reviews from "./reviews";

import "react-resizable/css/styles.css";
import EditImage from "./EditImage";

const ProductDetails = () => {
  const divRef = useRef(null);
  const [activeTab, setActiveTab] = useState(1);
  const [brandImage, setBrandImage] = useState("");
  const [brandImageName, setBrandImageName] = useState("");
  const [brandText, setBrandText] = useState("");
  const [brandFont, setBrandFont] = useState("");
  const [brandTextWeight, setBrandTextWeight] = useState("");
  const [brandTextSize, setBrandTextSize] = useState("24");
  const [brandFontStyle, setBrandFontStyle] = useState("not-italic");
  const [brandTextColor, setBrandTextColor] = useState("");
  const [openImageBox, setOpenImageBox] = useState(false);

  const handleDownload = () => {
    if (divRef.current) {
      toPng(divRef.current).then(function (dataUrl) {
        const link = document.createElement("a");
        link.download = "image.png";
        link.href = dataUrl;
        link.click();
      });
    }
  };

  const captureImage = (e) => {
    const file = e.target.files[0];
    setBrandImageName(file?.name);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setBrandImage(reader.result);
      setOpenImageBox(true);
    };
  };

  // removeBrandImage
  const removeBrandImage = () => {
    setBrandImage("");
    setBrandImageName("");
  };

  // resize brand image
  const [size, setSize] = useState({ width: 200, height: 200 });

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

            <div ref={divRef} className="relative h-fit overflow-hidden">
              <img
                src="/images/products/product_4.jpg"
                alt="product"
                className="w-full h-fit rounded-3xl"
              />

              {brandImage && !openImageBox && (
                <Draggable
                  axis="both"
                  handle=".brandLogo"
                  defaultPosition={{ x: -200, y: 0 }}
                  // defaultPosition={{ x: "50%", y: "50%" }}
                  position={null}
                  grid={[25, 25]}
                  scale={1}
                >
                  <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex justify-center items-center p-5 w-full h-full">
                    <div className="brandLogo w-full h-full">
                      <img
                        src={brandImage}
                        alt="Uploaded Image"
                        style={{
                          width: `${size?.width}px`,
                          height: `${size?.height}`,
                        }}
                      />
                    </div>
                  </div>
                </Draggable>
              )}

              {brandText && (
                <Draggable
                  axis="both"
                  handle=".handle"
                  defaultPosition={{ x: -500, y: 0 }}
                  // defaultPosition={{ x: "50%", y: "50%" }}
                  position={null}
                  grid={[25, 25]}
                  scale={1}
                >
                  <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex justify-center items-center text-center w-full p-5">
                    <h2
                      className={`handle ${brandTextSize} ${brandFont} ${brandTextWeight} ${brandFontStyle} cursor-pointer`}
                      style={brandTextColor ? { color: brandTextColor } : {}}
                    >
                      {brandText}
                    </h2>
                  </div>
                </Draggable>
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

              {/* upload custom design */}
              <div>
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

                {brandImageName && (
                  <div className="mt-5 flex items-center gap-3">
                    <span className="text-black font-medium">
                      {brandImageName}
                    </span>
                    <Button
                      onClick={removeBrandImage}
                      className="text-sm py-2 px-6"
                    >
                      Remove
                    </Button>
                  </div>
                )}
              </div>

              {/* custom text */}
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

              {/* text styles */}
              {brandText && (
                <div className="mt-10 grid sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="brand-size"
                      className="text-base mb-2 inline-block font-medium text-black"
                    >
                      Font Size
                    </label>
                    <select
                      className="w-full border rounded-3xl bg-transparent outline-none p-5"
                      id="brand-name"
                      value={brandTextSize}
                      onChange={(e) => setBrandTextSize(e.target.value)}
                    >
                      <option value="">Select Font Size</option>
                      <option value="text-xs">12</option>
                      <option value="text-sm">14</option>
                      <option value="text-base">16</option>
                      <option value="text-lg">18</option>
                      <option value="text-xl">20</option>
                      <option value="text-2xl">24</option>
                      <option value="text-3xl">30</option>
                      <option value="text-4xl">36</option>
                      <option value="text-5xl">48</option>
                      <option value="text-6xl">60</option>
                      <option value="text-7xl">72</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="brand-name"
                      className="text-base mb-2 inline-block font-medium text-black"
                    >
                      Select Font Style
                    </label>
                    <select
                      className="w-full border rounded-3xl bg-transparent outline-none p-5"
                      id="brand-name"
                      value={brandFontStyle}
                      onChange={(e) => setBrandFontStyle(e.target.value)}
                    >
                      <option value="">Select Font Style</option>
                      <option value="italic" className="italic">
                        Italic
                      </option>
                      <option value="not-italic">Normal</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="brand-name"
                      className="text-base mb-2 inline-block font-medium text-black"
                    >
                      Select Font
                    </label>
                    <select
                      className="w-full border rounded-3xl bg-transparent outline-none p-5"
                      id="brand-name"
                      value={brandFont}
                      onChange={(e) => setBrandFont(e.target.value)}
                    >
                      <option value="">Select Font</option>
                      <option value="font-poppins">Poppins</option>
                      <option value="font-roboto">Roboto</option>
                      <option value="font-oswald">Oswald</option>
                      <option value="font-dancing-script">
                        Dancing Script
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="brand-color"
                      className="text-base mb-2 inline-block font-medium text-black"
                    >
                      Select Color
                    </label>
                    <input
                      type="color"
                      className="w-full border rounded-3xl outline-none"
                      id="brand-name"
                      value={brandTextColor}
                      onChange={(e) => setBrandTextColor(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* add to cart */}
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

                <Button
                  onClick={handleDownload}
                  variant="dark"
                  className="w-full"
                >
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

      {/* editable image box */}
      <EditImage
        open={openImageBox}
        setOpen={setOpenImageBox}
        brandImage={brandImage}
        size={size}
        setSize={setSize}
      />
    </section>
  );
};

export default ProductDetails;
