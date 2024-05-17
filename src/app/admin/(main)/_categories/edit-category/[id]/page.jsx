"use client";
import BreadCumb from "@/app/admin/_components/BreadCumb";
import Button from "@/app/admin/_components/ui/Button";
import Error from "@/app/admin/_components/ui/Error";
import Input from "@/app/admin/_components/ui/Input";
import Label from "@/app/admin/_components/ui/Label";
import { addCategory } from "@/http/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const EditCategory = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const router = useRouter();

  // create new category
  const { mutate, isPending } = useMutation({
    mutationKey: ["addCategory"],
    mutationFn: async () => {
      const { data } = await addCategory({
        name,
        description,
      });
      return data;
    },
    onSuccess: () => {
      toast.success("New category added successfully.");
      router.push("/admin/categories");
    },
  });

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationErrors = {};

    if (!name) {
      validationErrors.name = "Category name is required!";
    }

    if (!description) {
      validationErrors.description = "Category description is required!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    mutate();
  };
  return (
    <>
      <BreadCumb title="Add New Category" page="Add Category" />

      <div className="mt-7 box-shadow rounded-xl p-5">
        <form onSubmit={submitHandler}>
          <div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-3">
                <Label htmlFor="name">Category Name</Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  placeholder="Enter your category name"
                />
                <Error>{errors?.name}</Error>
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="description">Category Description</Label>
                <textarea
                  className="text-sm w-full block outline-none p-2 rounded-[7px] focus:ring-1 ring-primary bg-transparent border"
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Enter category description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Error>{errors?.description}</Error>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-5 gap-3">
            <Button loading={isPending} type="submit">
              Create Category
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditCategory;
