//* react imports
import React from "react";

//* native components imports
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Features from "../components/Features";
import { Products } from "../components/Products";
import Categories from "../components/Categories";
import Blogs from "../components/Blogs";

export default function Main() {
  return (
    <div className="Main">
      <Navbar />
      <Banner />
      <Features />
      <Products />
      <Categories />
      <Blogs />
    </div>
  );
}
