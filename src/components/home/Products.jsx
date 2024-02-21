import Heading from "../shared/Heading";
import ProductItem from "../shared/ProductItem";

const Products = () => {
  return (
    <section className="py-14">
      <div className="container">
        <Heading>
          Choose your custom <br />
          packaging <span className="text-primary">boxes style</span>
        </Heading>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </section>
  );
};

export default Products;
