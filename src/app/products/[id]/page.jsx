"use client";
import ProductDetails from "@/components/productDetails";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import Breadcumb from "@/components/shared/Breadcumb";
import { getProduct } from "@/http/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const ProductDetailsPage = () => {
  // get id
  const { id } = useParams();

  // get product details
  const { data: product, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const { data } = await getProduct(id);
      return data;
    },
  });
  return isLoading ? (
    <div className="min-h-[80vh] w-full flex items-center justify-center">
      <img src="/images/loading.gif" alt="" />
    </div>
  ) : !isLoading && !product ? (
    <div className="min-h-[80vh] w-full flex items-center justify-center">
      <h2 className="text-3xl">Product Not Found!!</h2>
    </div>
  ) : (
    <main>
      <Breadcumb pathnames={["Home", "Products", "Product Details"]} />

      <ProductDetails product={product} />

      <RelatedProducts />
    </main>
  );
};

export default ProductDetailsPage;
