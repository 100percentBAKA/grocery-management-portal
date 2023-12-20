import { Box, styled } from "@mui/material";

const BannerText = styled(Box)(({ theme, fontSize }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.secondary.main,
  fontSize: fontSize,
  fontWeight: 600,
}));

export default function CustomH3({ children, fontSize }) {
  return <BannerText fontSize={fontSize}>{children}</BannerText>;
}
