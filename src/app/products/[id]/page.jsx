import ProductDetails from "@/components/productDetails";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import Breadcumb from "@/components/shared/Breadcumb";

const ProductDetailsPage = () => {
  return (
    <main>
      <Breadcumb pathnames={["Home", "Products", "Product Details"]} />

      <ProductDetails />

      <RelatedProducts />
    </main>
  );
};

export default ProductDetailsPage;
