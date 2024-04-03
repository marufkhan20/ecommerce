"use client";
import Uploader from "@/app/admin/_components/addProduct/Uploader";
import BreadCumb from "@/app/admin/_components/BreadCumb";
import Button from "@/app/admin/_components/ui/Button";
import Input from "@/app/admin/_components/ui/Input";
import Label from "@/app/admin/_components/ui/Label";
import { useState } from "react";

const AddCategory = () => {
  const [primaryImage, setPrimaryImage] = useState({
    image: "",
    imageName: "",
  });
  return (
    <>
      <BreadCumb title="Add New Category" page="Add Category" />

      <div className="mt-7 box-shadow rounded-xl p-5">
        <form>
          <div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-3">
                <Label htmlFor="name">Category Name</Label>
                <Input
                  // onChange={(e) => setHub(e.target.value)}
                  id="name"
                  placeholder="Enter your category name"
                />
                {/* <Error>{errors?.hub}</Error> */}
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="image">Category Image</Label>
                <Uploader
                  htmlFor="image"
                  imageName={primaryImage?.imageName}
                  onChange={setPrimaryImage}
                />
                {/* <Error>{errors?.hub}</Error> */}
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-5 gap-3">
            <Button type="submit">Create Category</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCategory;
