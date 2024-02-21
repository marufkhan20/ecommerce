import Categories from "@/components/home/Categories";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import FeedBacks from "@/components/home/FeedBacks";
import Products from "@/components/home/Products";

const Home = () => {
  return (
    <main>
      <FeaturedProduct />
      <Categories />
      <Products />
      <FeedBacks />
    </main>
  );
};

export default Home;
