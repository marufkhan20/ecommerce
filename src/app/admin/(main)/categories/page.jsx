"use client";
import { deleteCategory, getCategories } from "@/http/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdDelete, MdEdit } from "react-icons/md";
import BreadCumb from "../../_components/BreadCumb";
import Table from "../../_components/Table";
import Button from "../../_components/ui/Button";
import Loading from "../../_components/ui/Loading";

const Categories = () => {
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);

  // get categories
  const {
    data: categoryData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await getCategories();
      return data;
    },
  });

  useEffect(() => {
    if (categoryData?.results?.length > 0) {
      // calculate pages
      const totalPages = Math.ceil(categoryData?.results?.length / limit);
      if (totalPages) {
        setPages(totalPages);
      } else {
        setPages(1);
      }
    }
  }, [categoryData, limit]);

  useEffect(() => {
    setPage(1);
  }, [limit]);

  // delete category
  const { mutate, isPending } = useMutation({
    mutationKey: ["deleteCategory"],
    mutationFn: async (id) => {
      const { data } = await deleteCategory(id);
      return data;
    },
    onSuccess: () => {
      toast.success("Category deleted successfully.");
      refetch();
    },
  });
  return (
    <>
      <BreadCumb title="Categories" page="All Categories">
        <div className="flex gap-3">
          <Button href="/admin/categories/add-category">Add Category</Button>
        </div>
      </BreadCumb>
      <Table
        headers={["ID", "Name", "Image", "Description", "Action"]}
        cols="grid-cols-5"
        isLoading={isLoading}
        limit={limit}
        setLimit={setLimit}
        search={search}
        setSearch={setSearch}
        pages={pages}
        setPage={setPage}
        page={page}
        totalItems={categoryData?.results?.length}
      >
        {categoryData?.results
          ?.slice(page * limit - limit, limit * page)
          .filter((item) =>
            item?.name?.toLowerCase()?.includes(search?.toLowerCase())
          )
          .map((category, idx) => (
            <>
              <span className="py-3 pl-4 flex items-center">{idx + 1}</span>
              <span className="py-3">{category?.name}</span>
              <span className="py-3">
                <img
                  src={category?.image}
                  className="w-16 h-16 rounded-full"
                  alt=""
                />
              </span>
              <span className="py-3">{category?.description}</span>
              <div className="py-3 pr-4 flex items-center gap-2">
                <Link
                  href={`/forms/credit-card/edit-credit-card/`}
                  className="rounded py-[6px] px-2 bg-primary text-white cursor-pointer"
                >
                  <MdEdit />
                </Link>
                <button
                  className="rounded py-[6px] px-2 bg-red-500 text-white cursor-pointer"
                  onClick={() => mutate(category?.id)}
                >
                  {isPending ? <Loading className="w-4 h-4" /> : <MdDelete />}
                </button>
              </div>
            </>
          ))}
      </Table>
    </>
  );
};

export default Categories;
