//* images imports
import fImg1 from "../assets/feature-img-1.png";
import fImg2 from "../assets/feature-img-2.png";
import fImg3 from "../assets/feature-img-3.png";

//* native imports
import Highlighter from "./Highlighter";
import OutlinedCard from "./OutlinedCard";
import CustomButton from "./CustomButton";

//* MUI components import
import { Box, CardActions, CardContent, styled } from "@mui/material";
import CustomH3 from "./CustomH3";
import CustomContentText from "./CustomContentText";

//* styled components
const StyledHBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.secondary.main,
  fontSize: "2.1rem",
  fontFamily: "Poppins",
  fontWeight: 600,
  margin: "2.4rem 0",
}));

const CardBox = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "auto",
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(2),
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
}));

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
      style={{ width: "100%", height: "15rem", objectFit: "contain" }}
    />
  );
};

export default function Features() {
  return (
    <Box>
      <StyledHBox>
        Our <Highlighter text="Features" />
      </StyledHBox>
      <CardBox>
        <OutlinedCard maxWidth={350}>
          <ImageBox src={fImg1} alt="Feature - 1" />
          <CustomCardContent>
            <CustomH3>Fresh And Organic</CustomH3>
            <CustomContentText>
              Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit, Quis!
            </CustomContentText>
          </CustomCardContent>
          <CustomCardActions>
            <CustomButton buttonText="Read More" />
          </CustomCardActions>
        </OutlinedCard>
        <OutlinedCard>
          <ImageBox src={fImg2} alt="Feature - 2" />
          <CustomCardContent>
            <CustomH3>Fresh And Organic</CustomH3>
            <CustomContentText>
              Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit, Quis!
            </CustomContentText>
          </CustomCardContent>
          <CustomCardActions>
            <CustomButton buttonText="Read More" />
          </CustomCardActions>
        </OutlinedCard>
        <OutlinedCard>
          <ImageBox src={fImg3} alt="Feature - 3" />
          <CustomCardContent>
            <CustomH3>Fresh And Organic</CustomH3>
            <CustomContentText>
              Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit, Quis!
            </CustomContentText>
          </CustomCardContent>
          <CustomCardActions>
            <CustomButton buttonText="Read More" />
          </CustomCardActions>
        </OutlinedCard>
      </CardBox>
    </Box>
  );
}
