"use client";
import { getProducts } from "@/http/api";
import { useQuery } from "@tanstack/react-query";
import Heading from "../shared/Heading";
import ProductItem from "../shared/ProductItem";

const Products = () => {
  const { data: products, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await getProducts();
      return data;
    },
  });
  return (
    <section className="py-14">
      <div className="container">
        <Heading>
          Shop our popular gift <span className="text-primary">products</span>
        </Heading>

        {isPending && (
          <div className="flex items-center justify-center mt-8">
            <img className="w-20 h-20" src="/images/loading.gif" alt="" />
          </div>
        )}

        {products?.length > 0 && (
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products?.map((product) => (
              <ProductItem key={product?.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
