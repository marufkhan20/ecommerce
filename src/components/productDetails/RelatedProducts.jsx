import Heading from "../shared/Heading";
import ProductItem from "../shared/ProductItem";

const RelatedProducts = () => {
  return (
    <section className="pb-20">
      <div className="container">
        <Heading>Releated Products</Heading>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ProductItem product={[]} />
          <ProductItem product={[]} />
          <ProductItem product={[]} />
          <ProductItem product={[]} />
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
