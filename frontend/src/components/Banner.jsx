// * react imports
import React from "react";

//* native components imports
import CustomButton from "./CustomButton";
import CustomH3 from "./CustomH3";
import CustomContentText from "./CustomContentText";

//* react scroll
import { scroller } from "react-scroll";

// * MUI components imports
import { Box, styled } from "@mui/material";

//* images imports
import bannerImg from "../assets/banner-bg.webp";

const BannerContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "380px",
  background: `url(${bannerImg}) center / cover no-repeat`,
  marginTop: "80px",
  [theme.breakpoints.down("sm")]: {
    height: "550px",
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
  width: "70%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  rowGap: theme.spacing(3),

  [theme.breakpoints.down("sm")]: {
    width: "85%",
    rowGap: theme.spacing(4),
  },
}));

//* smooth scroller function
const smoothScroller = (name) => {
  console.log(name, typeof name);
  scroller.scrollTo(name, {
    duration: 600,
    delay: 100,
    smooth: true,
    offset: -100,
  });
  console.log("Hello world");
};

export default function Banner() {
  return (
    <BannerContainer id="Home">
      <ContentWrapper>
        <CustomH3 fontSize="2rem">
          Fresh And <span style={{ color: "#ff7800" }}>Organic</span> Products
        </CustomH3>
        <CustomContentText>
          Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Numquam
          vitae perspiciatis neque soluta.
        </CustomContentText>
        <CustomButton
          buttonText="Shop Now"
          onClick={(e) => smoothScroller("Products")}
        />
      </ContentWrapper>
    </BannerContainer>
  );
}
