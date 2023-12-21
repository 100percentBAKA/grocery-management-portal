//* images imports
import fImg1 from "../assets/feature-img-1.png";
import fImg2 from "../assets/feature-img-2.png";
import fImg3 from "../assets/feature-img-3.png";

//* native imports
import Highlighter from "./Highlighter";
import OutlinedCard from "./OutlinedCard";
import CustomButton from "./CustomButton";
import CustomHbox from "./CustomHbox";
import CustomCardBox from "./CustomCardBox";
import MainContainer from "./MainContainer";

//* MUI components import
import { Box, CardActions, CardContent, styled } from "@mui/material";
import CustomH3 from "./CustomH3";
import CustomContentText from "./CustomContentText";

//* styled components
const CustomCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const CustomCardActions = styled(CardActions)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const ImageBox = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ height: "15rem", objectFit: "contain" }}
    />
  );
};

export default function Features() {
  return (
    <Box>
      <CustomHbox>
        Our <Highlighter text="Features" />
      </CustomHbox>
      <MainContainer>
        <CustomCardBox>
          <OutlinedCard maxWidth={350} padding="2.5rem 1.8rem">
            <ImageBox src={fImg1} alt="Feature - 1" />
            <CustomCardContent>
              <CustomH3 fontSize="1.8rem">Fresh And Organic</CustomH3>
              <CustomContentText>
                Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit, Quis!
              </CustomContentText>
            </CustomCardContent>
            <CustomCardActions>
              <CustomButton buttonText="Read More" />
            </CustomCardActions>
          </OutlinedCard>
          <OutlinedCard maxWidth={350} padding="2.5rem 1.8rem">
            <ImageBox src={fImg2} alt="Feature - 2" />
            <CustomCardContent>
              <CustomH3 fontSize="1.8rem">Fresh And Organic</CustomH3>
              <CustomContentText>
                Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit, Quis!
              </CustomContentText>
            </CustomCardContent>
            <CustomCardActions>
              <CustomButton buttonText="Read More" />
            </CustomCardActions>
          </OutlinedCard>
          <OutlinedCard maxWidth={350} padding="2.5rem 1.8rem">
            <ImageBox src={fImg3} alt="Feature - 3" />
            <CustomCardContent>
              <CustomH3 fontSize="1.8rem">Fresh And Organic</CustomH3>
              <CustomContentText>
                Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit, Quis!
              </CustomContentText>
            </CustomCardContent>
            <CustomCardActions>
              <CustomButton buttonText="Read More" />
            </CustomCardActions>
          </OutlinedCard>
        </CustomCardBox>
      </MainContainer>
    </Box>
  );
}
