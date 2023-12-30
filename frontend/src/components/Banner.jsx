// * react imports
import React from "react";

//* native components imports
import CustomButton from "./CustomButton";
import CustomH3 from "./CustomH3";
import CustomContentText from "./CustomContentText";

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

export default function Banner() {
  return (
    <BannerContainer>
      <ContentWrapper>
        <CustomH3 fontSize="2rem">
          Fresh And <span style={{ color: "#ff7800" }}>Organic</span> Products
        </CustomH3>
        <CustomContentText>
          Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Numquam
          vitae perspiciatis neque soluta.
        </CustomContentText>
        <CustomButton buttonText="Shop Now" />
      </ContentWrapper>
    </BannerContainer>
  );
}
