//* react imports
import React, { useEffect } from "react";
import { useState } from "react";

//* MUI components import
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";

//* MUI icon import
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

//* MUI styled components
const StyledNavbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  height: "5rem",
  paddingTop: theme.spacing(1.5),
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const NavbarLinkBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: 25,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavbarLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "1rem",
  cursor: "pointer",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const IconBoxCtn = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  paddingRight: theme.spacing(2),
  gap: theme.spacing(1),
}));

const CustomIconBtn = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.main,
  backgroundColor: "#eee",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "1.85rem",
  fontWeight: 700,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const pages = ["Home", "Features", "Products", "Categories", "Review", "Blogs"];

const ListComponent = () => (
  <List>
    {pages.map((page, index) => (
      <ListItem key={index}>
        <ListItemButton>
          <ListItemText primary={page} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(true);

  const theme = useTheme();
  const isViewportSM = useMediaQuery(theme.breakpoints.down("sm"));

  //! console.log(isViewportSM);

  return (
    <StyledNavbar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={(e) => {
            if (isViewportSM) {
              setShowMenu(true);
            }
          }}
        >
          <StorefrontIcon
            sx={{ color: "#ff7800", fontSize: "35px", cursor: "pointer" }}
          />
        </IconButton>
        <Drawer
          anchor="left"
          open={showMenu}
          onClose={(e) => setShowMenu(false)}
        >
          <ListComponent />
        </Drawer>
        <Logo>Groco</Logo>
      </Toolbar>

      <NavbarLinkBox>
        {pages.map((page, index) => (
          <NavbarLink key={index}>{page}</NavbarLink>
        ))}
      </NavbarLinkBox>

      <IconBoxCtn>
        <CustomIconBtn>
          <SearchIcon />
        </CustomIconBtn>
        <CustomIconBtn>
          <ShoppingCartIcon />
        </CustomIconBtn>
        <CustomIconBtn>
          <PersonIcon />
        </CustomIconBtn>
      </IconBoxCtn>
    </StyledNavbar>
  );
}
