import { Box, styled } from "@mui/material";

const BannerText = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.secondary.main,
  fontSize: "1.8rem",
  fontWeight: 600,
}));

export default function CustomH3({ children }) {
  return <BannerText>{children}</BannerText>;
}
