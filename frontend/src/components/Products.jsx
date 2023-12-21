//* data imports
import productsData from "../data/products";

//* native imports
import CustomHbox from "./CustomHbox";
import Highlighter from "./Highlighter";
import CustomCardBox from "./CustomCardBox";
import OutlinedCard from "./OutlinedCard";
import CustomH3 from "./CustomH3";
import CustomContentText from "./CustomContentText";
import FAStars from "./FAStars";
import CustomButton from "./CustomButton";
import MainContainer from "./MainContainer";

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

function Products() {
  return (
    <Box>
      <CustomHbox>
        Our <Highlighter text="Products" />
      </CustomHbox>
      <MainContainer>
        <CustomCardBox>
          {productsData.map((product) => (
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
          ))}
        </CustomCardBox>
      </MainContainer>
    </Box>
  );
}

export { CustomCardActions, CustomCardContent, Products };
