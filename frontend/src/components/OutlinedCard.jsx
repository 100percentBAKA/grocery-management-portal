//* MUI components import
import { Card, styled } from "@mui/material";

//* styled component
const CustomCard = styled(Card)(({ theme, maxWidth }) => ({
  maxWidth: maxWidth || 350,
  textAlign: "center",
  boxShadow: "0 0.5rem 1.5rem rgba(0, 0, 0, 0.1)",
  outline: "0.1rem solid rgba(0, 0, 0, 0.1)",
  outlineOffset: "-0.6rem",
  padding: "2.5rem 1.8rem",
  transition: "linear 0.2s",
  background: "#fff",
  "&:hover": {
    outlineOffset: 0,
    outline: `0.16rem solid ${theme.palette.secondary.main}`,
  },
}));

export default function OutlinedCard({ children, maxWidth }) {
  return <CustomCard maxWidth={maxWidth}>{children}</CustomCard>;
}
