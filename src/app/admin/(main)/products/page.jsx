"use client";
import Link from "next/link";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import BreadCumb from "../../_components/BreadCumb";
import Table from "../../_components/Table";
import Button from "../../_components/ui/Button";

const Products = () => {
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);
  return (
    <>
      <BreadCumb title="Products" page="All Products">
        <div className="flex gap-3">
          <Button href="/admin/products/add-product">Add Product</Button>
        </div>
      </BreadCumb>
      <Table
        headers={["ID", "Title", "Thumbnail", "Price", "Stock", "Action"]}
        cols="grid-cols-6"
        // isLoading={isLoading}
        limit={limit}
        setLimit={setLimit}
        search={search}
        setSearch={setSearch}
        pages={pages}
        setPage={setPage}
        page={page}
        totalItems={3}
      >
        {/* {creditCards
        ?.slice(page * limit - limit, limit * page)
        .filter((item) =>
          item?.custName?.toLowerCase()?.includes(search?.toLowerCase())
        )
        .map((creditCard, idx) => ( */}
        <>
          <span className="py-3 pl-4 flex items-center">1</span>
          <span className="py-3">Shirt 1</span>
          <span className="py-3 flex items-center">
            <img
              src="https://static-01.daraz.com.bd/p/5a32d0e51410811735ea81c26eaed848.jpg"
              alt="product"
              className="w-16 rounded-lg"
            />
          </span>
          <span className="py-3 flex items-center">$100</span>
          <span className="py-3 flex items-center">48</span>
          <div className="py-3 pr-4 flex items-center gap-2">
            <Link
              href={`/forms/credit-card/edit-credit-card/`}
              className="rounded py-[6px] px-2 bg-primary text-white cursor-pointer"
            >
              <MdEdit />
            </Link>
            <button
              className="rounded py-[6px] px-2 bg-red-500 text-white cursor-pointer"
              // onClick={() => deleteCreditCard(creditCard?._id)}
            >
              {/* {loading ? <Loading className="w-4 h-4" /> : <MdDelete />} */}
              <MdDelete />
            </button>
          </div>
        </>

        <>
          <span className="py-3 pl-4 flex items-center">2</span>
          <span className="py-3 flex items-center">Shirt 2</span>
          <span className="py-3 flex items-center">
            <img
              src="https://static.aadi.com.bd/__sized__/products/17660-196930-formal-shirt-assorted-le-reve-reve-tex-ltd-714242-1-crop-c0-5__0-5-510x510-70.jpg"
              alt="product"
              className="w-16 rounded-lg"
            />
          </span>
          <span className="py-3 flex items-center">$100</span>
          <span className="py-3 flex items-center">48</span>
          <div className="py-3 pr-4 flex items-center gap-2">
            <Link
              href={`/forms/credit-card/edit-credit-card/`}
              className="rounded py-[6px] px-2 bg-primary text-white cursor-pointer"
            >
              <MdEdit />
            </Link>
            <button
              className="rounded py-[6px] px-2 bg-red-500 text-white cursor-pointer"
              // onClick={() => deleteCreditCard(creditCard?._id)}
            >
              {/* {loading ? <Loading className="w-4 h-4" /> : <MdDelete />} */}
              <MdDelete />
            </button>
          </div>
        </>

        <>
          <span className="py-3 pl-4 flex items-center">3</span>
          <span className="py-3 flex items-center">Shirt 3</span>
          <span className="py-3 flex items-center">
            <img
              src="https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnMlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
              alt="product"
              className="w-16 rounded-lg"
            />
          </span>
          <span className="py-3 flex items-center">$100</span>
          <span className="py-3 flex items-center">48</span>
          <div className="py-3 pr-4 flex items-center gap-2">
            <Link
              href={`/forms/credit-card/edit-credit-card/`}
              className="rounded py-[6px] px-2 bg-primary text-white cursor-pointer"
            >
              <MdEdit />
            </Link>
            <button
              className="rounded py-[6px] px-2 bg-red-500 text-white cursor-pointer"
              // onClick={() => deleteCreditCard(creditCard?._id)}
            >
              {/* {loading ? <Loading className="w-4 h-4" /> : <MdDelete />} */}
              <MdDelete />
            </button>
          </div>
        </>
        {/* ))} */}
      </Table>
    </>
  );
};

export default Products;
