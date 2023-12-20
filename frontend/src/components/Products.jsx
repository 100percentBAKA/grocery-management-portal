//* images imports
import pImg1 from "../assets/product-1.png";
import pImg2 from "../assets/product-2.png";
import pImg3 from "../assets/product-3.png";
import pImg4 from "../assets/product-4.png";
import pImg5 from "../assets/product-5.png";
import pImg6 from "../assets/product-6.png";
import pImg7 from "../assets/product-7.png";
import pImg8 from "../assets/product-8.png";

//* native imports
import CustomHbox from "./CustomHbox";
import Highlighter from "./Highlighter";
import CustomCardBox from "./CustomCardBox";
import OutlinedCard from "./OutlinedCard";
import CustomH3 from "./CustomH3";
import CustomContentText from "./CustomContentText";
import FAStars from "./FAStars";
import CustomButton from "./CustomButton";

//* MUI components imports
import { Box, CardActions, CardContent, styled } from "@mui/material";

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

export default function Products() {
  return (
    <Box>
      <CustomHbox>
        Our <Highlighter text="Products" />
      </CustomHbox>
      <CustomCardBox>
        <OutlinedCard padding="0.5rem 0.8rem">
          <ImageBox src={pImg1} alt="Oranges" />
          <CustomCardContent>
            <CustomH3 fontSize="1.6rem">Fresh Oranges</CustomH3>
            <CustomContentText fontSize="1.2rem">
              $4.99/ -- 10.99/-
            </CustomContentText>
            <FAStars />
          </CustomCardContent>
          <CustomCardActions>
            <CustomButton buttonText="Add To Cart" />
          </CustomCardActions>
        </OutlinedCard>

        <OutlinedCard padding="0.5rem 0.8rem">
          <ImageBox src={pImg2} alt="Oranges" />
          <CustomCardContent>
            <CustomH3 fontSize="1.6rem">Fresh Onions</CustomH3>
            <CustomContentText fontSize="1.2rem">
              $4.99/ -- 10.99/-
            </CustomContentText>
            <FAStars />
          </CustomCardContent>
          <CustomCardActions>
            <CustomButton buttonText="Add To Cart" />
          </CustomCardActions>
        </OutlinedCard>

        <OutlinedCard padding="0.5rem 0.8rem">
          <ImageBox src={pImg3} alt="Oranges" />
          <CustomCardContent>
            <CustomH3 fontSize="1.6rem">Fresh Meat</CustomH3>
            <CustomContentText fontSize="1.2rem">
              $4.99/ -- 10.99/-
            </CustomContentText>
            <FAStars />
          </CustomCardContent>
          <CustomCardActions>
            <CustomButton buttonText="Add To Cart" />
          </CustomCardActions>
        </OutlinedCard>

        <OutlinedCard padding="0.5rem 0.8rem">
          <ImageBox src={pImg4} alt="Oranges" />
          <CustomCardContent>
            <CustomH3 fontSize="1.6rem">Fresh Cabbage</CustomH3>
            <CustomContentText fontSize="1.2rem">
              $4.99/ -- 10.99/-
            </CustomContentText>
            <FAStars />
          </CustomCardContent>
          <CustomCardActions>
            <CustomButton buttonText="Add To Cart" />
          </CustomCardActions>
        </OutlinedCard>

        <OutlinedCard padding="0.5rem 0.8rem">
          <ImageBox src={pImg5} alt="Oranges" />
          <CustomCardContent>
            <CustomH3 fontSize="1.6rem">Fresh Potatoes</CustomH3>
            <CustomContentText fontSize="1.2rem">
              $4.99/ -- 10.99/-
            </CustomContentText>
            <FAStars />
          </CustomCardContent>
          <CustomCardActions>
            <CustomButton buttonText="Add To Cart" />
          </CustomCardActions>
        </OutlinedCard>

        <OutlinedCard padding="0.5rem 0.8rem">
          <ImageBox src={pImg6} alt="Oranges" />
          <CustomCardContent>
            <CustomH3 fontSize="1.6rem">Fresh Avocados</CustomH3>
            <CustomContentText fontSize="1.2rem">
              $4.99/ -- 10.99/-
            </CustomContentText>
            <FAStars />
          </CustomCardContent>
          <CustomCardActions>
            <CustomButton buttonText="Add To Cart" />
          </CustomCardActions>
        </OutlinedCard>

        <OutlinedCard padding="0.5rem 0.8rem">
          <ImageBox src={pImg7} alt="Oranges" />
          <CustomCardContent>
            <CustomH3 fontSize="1.6rem">Fresh Carrots</CustomH3>
            <CustomContentText fontSize="1.2rem">
              $4.99/ -- 10.99/-
            </CustomContentText>
            <FAStars />
          </CustomCardContent>
          <CustomCardActions>
            <CustomButton buttonText="Add To Cart" />
          </CustomCardActions>
        </OutlinedCard>

        <OutlinedCard padding="0.5rem 0.8rem">
          <ImageBox src={pImg8} alt="Oranges" />
          <CustomCardContent>
            <CustomH3 fontSize="1.6rem">Green Lemon</CustomH3>
            <CustomContentText fontSize="1.2rem">
              $4.99/ -- 10.99/-
            </CustomContentText>
            <FAStars />
          </CustomCardContent>
          <CustomCardActions>
            <CustomButton buttonText="Add To Cart" />
          </CustomCardActions>
        </OutlinedCard>
      </CustomCardBox>
    </Box>
  );
}
