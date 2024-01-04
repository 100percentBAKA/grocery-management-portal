//* data imports
import { productsData1, productsData2 } from "../data/products";

//* native imports
import CustomHbox from "./CustomHbox";
import Highlighter from "./Highlighter";
import OutlinedCard from "./OutlinedCard";
import CustomH3 from "./CustomH3";
import CustomContentText from "./CustomContentText";
import FAStars from "./FAStars";
import CustomButton from "./CustomButton";
import CustomSubContainer from "./CustomSubContainer";

//* MUI components imports
import { Box, CardActions, CardContent, styled } from "@mui/material";

//* swiper js imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

//* styled components
const ImageBox = ({ src, alt }) => {
  return <img src={src} alt={alt} style={{ height: "12rem" }} />;
};

const CustomCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  alignItems: "center",
}));

const CustomCardActions = styled(CardActions)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

function Products() {
  return (
    <Box sx={{ width: "100%" }} id="Products">
      <CustomHbox>
        Our <Highlighter text="Products" />
      </CustomHbox>

      <CustomSubContainer>
        <Swiper
          loop
          spaceBetween={20}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={3}
          pagination={{ clickable: true }}
          centeredSlides
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: { slidesPerView: 3 },
          }}
          style={{ padding: "1rem" }}
        >
          {productsData1.map((product, index) => (
            <SwiperSlide>
              <OutlinedCard padding="0.5rem 0.8rem" key={product.id}>
                <ImageBox src={product.imgSrc} alt={product.name} />
                <CustomCardContent>
                  <CustomH3 fontSize="1.6rem">{product.name}</CustomH3>
                  <CustomContentText fontSize="1.2rem">
                    $4.99/ -- 10.99/-
                  </CustomContentText>
                  <FAStars />
                </CustomCardContent>
                <CustomCardActions>
                  <CustomButton buttonText={product.buttonText} />
                </CustomCardActions>
              </OutlinedCard>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          loop
          spaceBetween={20}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={3}
          pagination={{ clickable: true }}
          centeredSlides
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: { slidesPerView: 3 },
          }}
          style={{ padding: "1rem" }}
        >
          {productsData2.map((product, index) => (
            <SwiperSlide>
              <OutlinedCard padding="0.5rem 0.8rem" key={product.id}>
                <ImageBox src={product.imgSrc} alt={product.name} />
                <CustomCardContent>
                  <CustomH3 fontSize="1.6rem">{product.name}</CustomH3>
                  <CustomContentText fontSize="1.2rem">
                    $4.99/ -- 10.99/-
                  </CustomContentText>
                  <FAStars />
                </CustomCardContent>
                <CustomCardActions>
                  <CustomButton buttonText={product.buttonText} />
                </CustomCardActions>
              </OutlinedCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </CustomSubContainer>
    </Box>
  );
}

export { CustomCardActions, CustomCardContent, Products };
