"use client";
import Categories from "@/components/home/Categories";
import CompanyInfo from "@/components/home/CompanyInfo";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import FeedBacks from "@/components/home/FeedBacks";
import Products from "@/components/home/Products";
import { Suspense } from "react";

const Home = () => {
  return (
    <main>
      <FeaturedProduct />
      <Suspense>
        <Categories />
      </Suspense>
      <Suspense>
        <Products />
      </Suspense>
      <FeedBacks />
      <CompanyInfo />
    </main>
  );
};

export default Home;
