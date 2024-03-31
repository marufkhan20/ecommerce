"use client";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import BreadCumb from "../../_components/BreadCumb";
import Table from "../../_components/Table";

const Orders = () => {
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);
  return (
    <>
      <BreadCumb title="Orders" page="All Orders" />
      <Table
        headers={["ID", "Name", "Product", "Title", "Status", "Date", "Action"]}
        cols="grid-cols-7"
        // isLoading={isLoading}
        limit={limit}
        setLimit={setLimit}
        search={search}
        setSearch={setSearch}
        pages={pages}
        setPage={setPage}
        page={page}
        totalItems={1}
      >
        {/* {creditCards
        ?.slice(page * limit - limit, limit * page)
        .filter((item) =>
          item?.custName?.toLowerCase()?.includes(search?.toLowerCase())
        )
        .map((creditCard, idx) => ( */}
        <>
          <span className="py-3 pl-4 flex items-center">1</span>
          <span className="py-3">John Doe</span>
          <span className="py-3 flex items-center">
            <img
              src="https://static-01.daraz.com.bd/p/5a32d0e51410811735ea81c26eaed848.jpg"
              alt="product"
              className="w-16 rounded-lg"
            />
          </span>
          <span className="py-3">Shirt 1</span>
          <span className="py-3 flex items-center">
            <select
              name=""
              id=""
              className="border py-2 px-1 rounded-md outline-none"
            >
              <option value="">Change Status</option>
              <option value="" selected>
                Pending
              </option>
              <option value="">Process</option>
              <option value="">Shipping</option>
              <option value="">Delivered</option>
              <option value="">Completed</option>
              <option value="">Cancelled</option>
            </select>
          </span>
          <span className="py-3 flex items-center">31 March, 2024</span>
          <div className="py-3 pr-4 flex items-center gap-2">
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

export default Orders;
