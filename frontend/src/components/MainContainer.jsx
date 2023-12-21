//* MUI components
import { Box, styled } from "@mui/material";

//* styled components
const CustomContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1000px",
  margin: "auto",
}));

export default function MainContainer({ children }) {
  return <CustomContainer>{children}</CustomContainer>;
}
