"use client";
import Uploader from "@/app/admin/_components/addProduct/Uploader";
import BreadCumb from "@/app/admin/_components/BreadCumb";
import Button from "@/app/admin/_components/ui/Button";
import Input from "@/app/admin/_components/ui/Input";
import Label from "@/app/admin/_components/ui/Label";
import { useState } from "react";

const AddProduct = () => {
  const [primaryImage, setPrimaryImage] = useState({
    image: "",
    imageName: "",
  });
  const [colorVariations, setColorVariations] = useState([
    {
      id: 1,
      name: "",
      image: "",
      imageName: "",
    },
  ]);
  const [productVariations, setProductVariations] = useState([
    {
      id: 1,
      name: "",
      image: "",
      imageName: "",
    },
  ]);
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      text: "",
      image: "",
      imageName: "",
    },
  ]);

  // add new color variantion
  const addNewColorVariation = () => {
    const id =
      colorVariations?.length === 0
        ? 1
        : colorVariations[colorVariations.length - 1]?.id + 1;

    setColorVariations([
      ...colorVariations,
      {
        id,
        name: "",
        image: "",
        imageName: "",
      },
    ]);
  };

  // update color variant state
  const changeColorVariant = (id, name, value) => {
    const updatedColorVariations = colorVariations.map((item) => {
      if (item?.id === id) {
        item[name] = value;
        return item;
      } else {
        return item;
      }
    });

    setColorVariations(updatedColorVariations);
  };

  // add new product variantion
  const addNewProductVariation = () => {
    const id =
      productVariations?.length === 0
        ? 1
        : productVariations[productVariations.length - 1]?.id + 1;

    setProductVariations([
      ...productVariations,
      {
        id,
        name: "",
        image: "",
        imageName: "",
      },
    ]);
  };

  // update product variant state
  const changeProductVariant = (id, name, value) => {
    const updatedProductVariations = productVariations.map((item) => {
      if (item?.id === id) {
        item[name] = value;
        return item;
      } else {
        return item;
      }
    });

    setProductVariations(updatedProductVariations);
  };

  // add new quote
  const addNewQuote = () => {
    const id = quotes?.length === 0 ? 1 : quotes[quotes.length - 1]?.id + 1;

    setQuotes([
      ...quotes,
      {
        id,
        text: "",
        image: "",
        imageName: "",
      },
    ]);
  };

  // update quote state
  const changeQuote = (id, name, value) => {
    const updatedQuotes = quotes.map((item) => {
      if (item?.id === id) {
        item[name] = value;
        return item;
      } else {
        return item;
      }
    });

    setQuotes(updatedQuotes);
  };
  return (
    <>
      <BreadCumb title="Add New Product" page="Add Product" />

      <div className="mt-7 box-shadow rounded-xl p-5">
        <form>
          <h3 className="mb-3 text-lg border p-3 rounded-lg">
            Basic Information
          </h3>
          <div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-3">
                <Label htmlFor="title">Product Title</Label>
                <Input
                  // onChange={(e) => setHub(e.target.value)}
                  id="title"
                  placeholder="Enter your product title"
                />
                {/* <Error>{errors?.hub}</Error> */}
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="price">Product Price</Label>
                <Input
                  // onChange={(e) => setHub(e.target.value)}
                  id="price"
                  placeholder="Enter your product price"
                />
                {/* <Error>{errors?.hub}</Error> */}
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="stock">In Stock</Label>
                <Input
                  // onChange={(e) => setHub(e.target.value)}
                  id="stock"
                  placeholder="Enter your product stock"
                />
                {/* <Error>{errors?.hub}</Error> */}
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="category">Category</Label>

                <select
                  className="text-sm w-full block outline-none p-2 rounded-[7px] focus:ring-1 ring-primary bg-transparent border"
                  name=""
                  id="category"
                >
                  <option value="">Choose Category</option>
                  <option value="">Shirt</option>
                  <option value="">Jeans</option>
                  <option value="">Jacket</option>
                  <option value="">Accessories</option>
                </select>
                {/* <Error>{errors?.hub}</Error> */}
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="description">Description</Label>

                <textarea
                  className="text-sm w-full block outline-none p-2 rounded-[7px] focus:ring-1 ring-primary bg-transparent border"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enter product details"
                ></textarea>
                {/* <Error>{errors?.hub}</Error> */}
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="primary_image">Primary Image</Label>
                <Uploader
                  imageName={primaryImage?.imageName}
                  onChange={setPrimaryImage}
                  htmlFor="primary_image"
                />
                {/* <Error>{errors?.hub}</Error> */}
              </div>
            </div>
          </div>

          {/* color variations */}
          <div>
            <h3 className="my-3 mt-5 text-lg border p-3 rounded-lg">
              Color Variations
            </h3>
            <div>
              <div className="flex flex-col gap-5">
                {colorVariations?.map((item) => (
                  <div key={item?.id} className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-3">
                      <Label htmlFor={`color-${item?.id}`}>Color Name</Label>
                      <Input
                        id={`color-${item?.id}`}
                        value={item?.name}
                        onChange={(e) =>
                          changeColorVariant(item?.id, "name", e.target.value)
                        }
                        placeholder="Enter your product Color"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <Label htmlFor={item?.id}>Upload Color Image</Label>
                      <Uploader
                        onChange={changeColorVariant}
                        type="secondary"
                        id={item?.id}
                        htmlFor={`color-image-${item?.id}`}
                        imageName={item?.imageName}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="mt-5 border rounded-lg py-2 px-4 border-primary text-primary text-sm"
                onClick={addNewColorVariation}
              >
                Add New Color
              </button>
            </div>
          </div>

          {/* product variations */}
          <div>
            <h3 className="my-3 mt-5 text-lg border p-3 rounded-lg">
              Product Variations
            </h3>
            <div>
              <div className="flex flex-col gap-5">
                {productVariations?.map((item) => (
                  <div key={item?.id} className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-3">
                      <Label htmlFor={`product-${item?.id}`}>
                        Product Name
                      </Label>
                      <Input
                        id={`product-${item?.id}`}
                        value={item?.name}
                        onChange={(e) =>
                          changeProductVariant(item?.id, "name", e.target.value)
                        }
                        placeholder="Enter your product Name"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <Label htmlFor={item?.id}>Upload Product Image</Label>
                      <Uploader
                        onChange={changeProductVariant}
                        type="secondary"
                        htmlFor={"product-image-" + item?.id}
                        id={item?.id}
                        imageName={item?.imageName}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="mt-5 border rounded-lg py-2 px-4 border-primary text-primary text-sm"
                onClick={addNewProductVariation}
              >
                Add New Product Variant
              </button>
            </div>
          </div>

          {/* quotes */}
          <div>
            <h3 className="my-3 mt-5 text-lg border p-3 rounded-lg">
              Add Quotes
            </h3>
            <div>
              <div className="flex flex-col gap-5">
                {quotes?.map((item) => (
                  <div key={item?.id} className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-3">
                      <Label htmlFor={`quote-${item?.id}`}>Quote Text</Label>
                      <Input
                        id={`quote-${item?.id}`}
                        value={item?.text}
                        onChange={(e) =>
                          changeQuote(item?.id, "text", e.target.value)
                        }
                        placeholder="Enter your Quote Text"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <Label htmlFor={item?.id}>Upload Quote Image</Label>
                      <Uploader
                        onChange={changeQuote}
                        type="secondary"
                        htmlFor={"quote-image-" + item?.id}
                        id={item?.id}
                        imageName={item?.imageName}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="mt-5 border rounded-lg py-2 px-4 border-primary text-primary text-sm"
                onClick={addNewQuote}
              >
                Add New Quote
              </button>
            </div>
          </div>

          <div className="flex justify-end mt-5 gap-3">
            <Button type="submit">Create Product</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
