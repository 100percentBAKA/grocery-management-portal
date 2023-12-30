import { Box, styled } from "@mui/material";

const StyledHBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.secondary.main,
  fontSize: "2.2rem",
  fontFamily: "Poppins",
  fontWeight: 600,
  margin: "4.5rem 0 3rem 0",
}));

export default function CustomHbox({ children }) {
  return <StyledHBox>{children}</StyledHBox>;
}
