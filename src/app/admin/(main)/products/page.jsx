"use client";
import { deleteProduct, getProducts } from "@/http/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import BreadCumb from "../../_components/BreadCumb";
import Table from "../../_components/Table";
import Button from "../../_components/ui/Button";
import Loading from "../../_components/ui/Loading";

const Products = () => {
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);

  // get products
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await getProducts();
      return data;
    },
  });

  useEffect(() => {
    if (products?.length > 0) {
      // calculate pages
      const totalPages = Math.ceil(products?.length / limit);
      if (totalPages) {
        setPages(totalPages);
      } else {
        setPages(1);
      }
    }
  }, [products, limit]);

  useEffect(() => {
    setPage(1);
  }, [limit]);

  // delete product
  const { mutate, isPending } = useMutation({
    mutationKey: ["deleteProduct"],
    mutationFn: async (id) => {
      const { data } = await deleteProduct(id);
      return data;
    },
    onSuccess: () => {
      toast.success("Product deleted successfully.");
      refetch();
    },
  });
  return (
    <>
      <BreadCumb title="Products" page="All Products">
        <div className="flex gap-3">
          <Button href="/admin/products/add-product">Add Product</Button>
        </div>
      </BreadCumb>
      <Table
        headers={["ID", "Title", "Thumbnail", "Price", "Review", "Action"]}
        cols="grid-cols-6"
        isLoading={isLoading}
        limit={limit}
        setLimit={setLimit}
        search={search}
        setSearch={setSearch}
        pages={pages}
        setPage={setPage}
        page={page}
        totalItems={products?.length}
      >
        {products
          ?.slice(page * limit - limit, limit * page)
          .filter((item) =>
            item?.title?.toLowerCase()?.includes(search?.toLowerCase())
          )
          .map((product, idx) => (
            <>
              <span className="py-3 pl-4 flex items-center">{idx + 1}</span>
              <span className="py-3">{product?.title}</span>
              <span className="py-3 flex items-center">
                <img
                  src={product?.primary_image}
                  alt="product"
                  className="w-16 rounded-lg"
                />
              </span>
              <span className="py-3 flex items-center">${product?.price}</span>
              <span className="py-3 flex items-center">
                {product?.review_avg}
              </span>
              <div className="py-3 pr-4 flex items-center gap-2">
                <Link
                  href={`/forms/credit-card/edit-credit-card/`}
                  className="rounded py-[6px] px-2 bg-primary text-white cursor-pointer"
                >
                  <MdEdit />
                </Link>
                <button
                  className="rounded py-[6px] px-2 bg-red-500 text-white cursor-pointer"
                  onClick={() => mutate(product?.id)}
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

export default Products;