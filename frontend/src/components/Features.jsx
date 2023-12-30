import featureData from "../data/features";

//* native imports
import Highlighter from "./Highlighter";
import OutlinedCard from "./OutlinedCard";
import CustomButton from "./CustomButton";
import CustomHbox from "./CustomHbox";
import CustomCardBox from "./CustomCardBox";
import CustomSubContainer from "./CustomSubContainer";

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
  return <img src={src} alt={alt} style={{ objectFit: "contain" }} />;
};

export default function Features() {
  return (
    <Box sx={{ width: "100%" }}>
      <CustomHbox>
        Our <Highlighter text="Features" />
      </CustomHbox>
      <CustomSubContainer>
        <CustomCardBox>
          {featureData.map((feature) => (
            <OutlinedCard padding="2.5rem 1.8rem">
              <ImageBox src={feature.imgSrc} alt="Feature - 3" />
              <CustomCardContent>
                <CustomH3 fontSize="1.8rem">{feature.featureTitle}</CustomH3>
                <CustomContentText>{feature.featureDesc}</CustomContentText>
              </CustomCardContent>
              <CustomCardActions>
                <CustomButton buttonText={feature.buttonText} />
              </CustomCardActions>
            </OutlinedCard>
          ))}
        </CustomCardBox>
      </CustomSubContainer>
    </Box>
  );
}
