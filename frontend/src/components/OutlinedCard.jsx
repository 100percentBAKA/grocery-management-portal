//* MUI components import
import { Card, styled } from "@mui/material";

//* styled component
const CustomCard = styled(Card)(({ theme, maxWidth, padding }) => ({
  maxWidth: maxWidth,
  textAlign: "center",
  boxShadow: "0 0.5rem 1.5rem rgba(0, 0, 0, 0.1)",
  outline: "0.1rem solid rgba(0, 0, 0, 0.1)",
  outlineOffset: "-0.6rem",
  padding: padding,
  transition: "linear 0.2s",
  background: "#fff",
  "&:hover": {
    outlineOffset: 0,
    outline: `0.16rem solid ${theme.palette.secondary.main}`,
  },
}));

export default function OutlinedCard({ children, maxWidth, padding }) {
  return (
    <CustomCard maxWidth={maxWidth} padding={padding}>
      {children}
    </CustomCard>
  );
}
