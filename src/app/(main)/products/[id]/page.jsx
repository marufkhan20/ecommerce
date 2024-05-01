"use client";
import ProductDetails from "@/components/productDetails";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import Breadcumb from "@/components/shared/Breadcumb";
import { products } from "@/data/products";
import { useParams } from "next/navigation";

const ProductDetailsPage = () => {
  // get id
  const { id } = useParams();

  const isPending = false;
  const isLoading = false;
  const product = products?.results[0];

  // get product details
  // const { data: product, isLoading } = useQuery({
  //   queryKey: ["product"],
  //   queryFn: async () => {
  //     const { data } = await getProduct(id);
  //     return data;
  //   },
  // });
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

      <ProductDetails product={products?.results[0]} />

      <RelatedProducts products={products?.results[0]?.related_products} />
    </main>
  );
};

export default ProductDetailsPage;
