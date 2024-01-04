//* data imports
import categoriesData from "../data/categories";

//* native imports
import CustomHbox from "./CustomHbox";
import Highlighter from "./Highlighter";
import CustomCardBox from "./CustomCardBox";
import OutlinedCard from "./OutlinedCard";
import { CustomCardActions, CustomCardContent } from "./Products";
import CustomH3 from "./CustomH3";
import CustomContentText from "./CustomContentText";
import CustomButton from "./CustomButton";
import CustomSubContainer from "./CustomSubContainer";

//* MUI components imports
import { Box } from "@mui/material";

//* styled components
const ImageBox = ({ src, alt }) => {
  return <img src={src} alt={alt} style={{ height: "10rem" }} />;
};

export default function Categories() {
  return (
    <Box sx={{ width: "100%" }} id="Categories">
      <CustomHbox>
        Products <Highlighter text="Categories" />
      </CustomHbox>
      <CustomSubContainer>
        <CustomCardBox>
          {categoriesData.map((category) => (
            <OutlinedCard padding="0.5rem 0.8rem" key={category.id}>
              <ImageBox src={category.imgSrc} alt="Category - 1" />
              <CustomCardContent>
                <CustomH3 fontSize="1.6rem">{category.name}</CustomH3>
                <CustomContentText fontSize="1.2rem">
                  {category.discount}
                </CustomContentText>
              </CustomCardContent>
              <CustomCardActions>
                <CustomButton buttonText={category.buttonText} />
              </CustomCardActions>
            </OutlinedCard>
          ))}
        </CustomCardBox>
      </CustomSubContainer>
    </Box>
  );
}
