//* MUI components import
import { Card, styled } from "@mui/material";

//* styled components
const CustomCard = styled(Card)(({ theme, maxWidth, padding }) => ({
  maxWidth: maxWidth,
  padding: padding,
  borderRadius: "0.3rem",
  overflow: "hidden",
  boxShadow: "0 0.5rem 1.5rem rgba(0, 0, 0, 0.1)",
  background: theme.palette.common.white,
}));

export default function ContainedCards({ children, maxWidth, padding }) {
  return (
    <CustomCard maxWidth={maxWidth} padding={padding}>
      {children}
    </CustomCard>
  );
}
