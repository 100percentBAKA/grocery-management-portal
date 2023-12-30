//* react imports
import React from "react";

//* native components imports
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Features from "../components/Features";
import { Products } from "../components/Products";
import Categories from "../components/Categories";
import Blogs from "../components/Blogs";

//* MUI components imports
import { Box, styled } from "@mui/material";

//* styled components
const MainContainer = styled(Box)(({ theme }) => ({
  paddingTop: "5rem",
}));

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
