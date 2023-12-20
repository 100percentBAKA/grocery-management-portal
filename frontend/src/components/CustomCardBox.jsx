//* MUI components
import { Box, styled } from "@mui/material";

//* styled components
const CardBox = styled(Box)(({ theme }) => ({
  width: "100%",
  flexDirection: "row",
  gap: theme.spacing(2),
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export default function CustomCardBox({ children }) {
  return <CardBox>{children}</CardBox>;
}
