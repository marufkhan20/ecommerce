"use client";
import ProductDetails from "@/components/productDetails";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import Breadcumb from "@/components/shared/Breadcumb";
import { products } from "@/data/products";
import { getProduct, getProductPersonalization } from "@/http/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const ProductDetailsPage = () => {
  // get id
  const { id } = useParams();

  // get product details
  const { data: productData, isLoading: productDataLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const { data } = await getProduct(id);
      return data;
    },
  });

  const { data: personalizationData, isLoading } = useQuery({
    queryKey: ["product_personalization"],
    queryFn: async () => {
      const { data } = await getProductPersonalization(id);
      return data;
    },
  });
  return isLoading ? (
    <div className="min-h-[80vh] w-full flex items-center justify-center">
      <img src="/images/loading.gif" alt="" />
    </div>
  ) : !isLoading && !productData ? (
    <div className="min-h-[80vh] w-full flex items-center justify-center">
      <h2 className="text-3xl">Product Not Found!!</h2>
    </div>
  ) : (
    <main>
      <Breadcumb pathnames={["Home", "Products", "Product Details"]} />

      <ProductDetails
        personalizationData={personalizationData}
        product={productData}
      />

      <RelatedProducts products={products?.results[0]?.related_products} />
    </main>
  );
};

export default ProductDetailsPage;
