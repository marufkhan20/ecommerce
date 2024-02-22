import Heading from "../shared/Heading";
import ProductItem from "../shared/ProductItem";

const Products = () => {
  return (
    <section className="py-14">
      <div className="container">
        <Heading>
          Shop our popular gift <span className="text-primary">products</span>
        </Heading>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ProductItem image="https://i.etsystatic.com/27931246/r/il/a1dc5e/4055579401/il_300x300.4055579401_i9yn.jpg" />
          <ProductItem image="https://i.etsystatic.com/38809623/r/il/3b1e1c/4356010322/il_300x300.4356010322_m770.jpg" />
          <ProductItem image="https://i.etsystatic.com/27931246/r/il/d34261/4007923878/il_300x300.4007923878_qi4f.jpg" />
          <ProductItem image="https://i.etsystatic.com/39513913/r/il/e46d18/4654284228/il_300x300.4654284228_7jvn.jpg" />
          <ProductItem image="https://i.etsystatic.com/37075944/c/1500/1500/253/0/il/24e4d6/5430249519/il_300x300.5430249519_cprb.jpg" />
          <ProductItem image="https://i.etsystatic.com/38328798/c/1941/1941/387/0/il/cf8871/5211256491/il_300x300.5211256491_hs79.jpg" />
          <ProductItem image="https://i.etsystatic.com/27931246/r/il/a0932c/3380069678/il_300x300.3380069678_dlot.jpg" />
          <ProductItem image="https://i.etsystatic.com/16940835/r/il/b6cf52/5828507569/il_300x300.5828507569_c64e.jpg" />
          <ProductItem image="https://i.etsystatic.com/24636807/c/2250/2250/0/552/il/b9a503/4833809604/il_300x300.4833809604_8bb1.jpg" />
          <ProductItem image="https://i.etsystatic.com/22477312/r/il/5ac7d9/4318918442/il_300x300.4318918442_ms3e.jpg" />
          <ProductItem image="https://i.etsystatic.com/37075944/r/il/5efb11/5031689478/il_300x300.5031689478_f702.jpg" />
          <ProductItem image="https://i.etsystatic.com/45349016/c/1574/1574/860/356/il/266f34/5392791583/il_300x300.5392791583_nafp.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Products;
