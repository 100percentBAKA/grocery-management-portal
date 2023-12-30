//* data imports
import blogData from "../data/blogs";

//* native components import
import CustomHbox from "./CustomHbox";
import Highlighter from "./Highlighter";
import CustomCardBox from "./CustomCardBox";
import ContainedCards from "./ContainedCards";
import { CustomCardContent } from "./Products";
import CustomH3 from "./CustomH3";
import CustomSubContainer from "./CustomSubContainer";

//* font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";

//* mui imports
import { Box, Typography, styled, Divider } from "@mui/material";
import CustomContentText from "./CustomContentText";
import CustomButton from "./CustomButton";

//* styled components
const ImageBox = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ height: "17rem", width: "100%", objectFit: "cover" }}
    />
  );
};

const IconCtn = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  display: "flex",
  justifyContent: "space-between",
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  columnGap: theme.spacing(1),
}));

const CustomTypo = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
}));

export default function Blogs() {
  return (
    <Box sx={{ marginBottom: 10 }}>
      <CustomHbox>
        Our <Highlighter text="Blogs" />
      </CustomHbox>
      <CustomSubContainer>
        <CustomCardBox>
          {blogData.map((blog) => (
            <ContainedCards maxWidth="300px">
              <ImageBox src={blog.imgSrc} alt={blog.title} />
              <IconCtn>
                <IconBox>
                  <FontAwesomeIcon icon={faUser} color="#ff7800" />
                  <CustomTypo>By {blog.userName}</CustomTypo>
                </IconBox>
                <IconBox>
                  <FontAwesomeIcon icon={faCalendar} color="#ff7800" />
                  <CustomTypo>{blog.dateCreated}</CustomTypo>
                </IconBox>
              </IconCtn>
              <Divider />
              <CustomCardContent>
                <CustomH3 fontSize="1.5rem">{blog.title}</CustomH3>
                <CustomContentText>
                  Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                  Veniam, Expedita.
                </CustomContentText>
              </CustomCardContent>
              <Box sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                <CustomButton buttonText="Read More" />
              </Box>
            </ContainedCards>
          ))}
        </CustomCardBox>
      </CustomSubContainer>
    </Box>
  );
}
