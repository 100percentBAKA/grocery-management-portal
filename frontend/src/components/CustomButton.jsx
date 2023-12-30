import React from "react";

//* MUI imports
import { Button, styled } from "@mui/material";

const CustomButton = ({ buttonText }) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.main,
    textTransform: "none",
    fontSize: "1rem",
    width: "fit-content",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: theme.palette.secondary.main,
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },

    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  }));

  return <CustomButton>{buttonText}</CustomButton>;
};

export default CustomButton;
