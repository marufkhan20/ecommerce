"use client";
import BreadCumb from "@/app/admin/_components/BreadCumb";
import Button from "@/app/admin/_components/ui/Button";
import Input from "@/app/admin/_components/ui/Input";
import Label from "@/app/admin/_components/ui/Label";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddProduct = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [creditCardData, setCreditCardData] = useState({});

  const router = useRouter();
  return (
    <>
      <BreadCumb title="Add New Product" page="Add Product" />

      <div className="mt-7 box-shadow rounded-xl p-5">
        <form>
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
                <Label htmlFor="image">Primary Image</Label>

                <input type="file" name="" id="image" className="hidden" />
                {/* <Error>{errors?.hub}</Error> */}
              </div>
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
