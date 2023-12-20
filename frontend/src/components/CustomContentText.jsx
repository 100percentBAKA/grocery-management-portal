import { Typography, styled } from "@mui/material";

const ContentText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "1rem",
  color: "#666",
}));

export default function CustomContentText({ children }) {
  return <ContentText>{children}</ContentText>;
}
