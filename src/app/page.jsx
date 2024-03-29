"use client";
import Categories from "@/components/home/Categories";
import CompanyInfo from "@/components/home/CompanyInfo";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import FeedBacks from "@/components/home/FeedBacks";
import Products from "@/components/home/Products";

const Home = () => {
  // useEffect(() => {
  //   let config = {
  //     method: "get",
  //     maxBodyLength: Infinity,
  //     url: "http://localhost:8000/api/product",
  //     headers: {},
  //   };

  //   axios
  //     .request(config)
  //     .then((response) => {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <main>
      <FeaturedProduct />
      <Categories />
      <Products />
      <FeedBacks />
      <CompanyInfo />
    </main>
  );
};

export default Home;
