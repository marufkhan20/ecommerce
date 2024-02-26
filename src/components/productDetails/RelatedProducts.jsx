import Heading from "../shared/Heading";
import ProductItem from "../shared/ProductItem";

const RelatedProducts = () => {
  return (
    <section className="pb-20">
      <div className="container">
        <Heading>Releated Products</Heading>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ProductItem image="https://i.etsystatic.com/27931246/r/il/a1dc5e/4055579401/il_300x300.4055579401_i9yn.jpg" />
          <ProductItem image="https://i.etsystatic.com/38809623/r/il/3b1e1c/4356010322/il_300x300.4356010322_m770.jpg" />
          <ProductItem image="https://i.etsystatic.com/27931246/r/il/d34261/4007923878/il_300x300.4007923878_qi4f.jpg" />
          <ProductItem image="https://i.etsystatic.com/39513913/r/il/e46d18/4654284228/il_300x300.4654284228_7jvn.jpg" />
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
