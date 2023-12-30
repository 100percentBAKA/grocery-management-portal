//* MUI components
import { Box, styled } from "@mui/material";

//* styled components
const SubBox = styled(Box)(({ theme }) => ({
  width: "90%",
  margin: "auto",
}));

export default function CustomSubContainer({ children }) {
  return <SubBox>{children}</SubBox>;
}
