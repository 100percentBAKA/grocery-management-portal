import { Typography, styled } from "@mui/material";

const ContentText = styled(Typography)(({ theme, fontSize }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: fontSize,
  color: "#666",
}));

export default function CustomContentText({ children, fontSize }) {
  return <ContentText fontSize={fontSize}>{children}</ContentText>;
}
