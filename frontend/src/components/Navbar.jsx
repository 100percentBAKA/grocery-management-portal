//* react imports
import React from "react";
import { useState } from "react";

//* react scroll
import { scroller } from "react-scroll";

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
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

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

//* smooth scrolling function
function smoothScroller(name, state) {
  state(false);

  scroller.scrollTo(name, {
    duration: 600,
    delay: 100,
    smooth: true,
    offset: -100,
  });
}

const pages = ["Home", "Features", "Products", "Categories", "Blogs"];

const ListComponent = ({ setShowMenu }) => (
  <List>
    {pages.map((page, index) => (
      <ListItem key={index}>
        <ListItemButton>
          <ListItemText
            primary={page}
            onClick={(e) => smoothScroller(page, setShowMenu)}
          />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const theme = useTheme();
  const isScreenSmaller = useMediaQuery(theme.breakpoints.down("md"));

  //! console.log(isViewportSM);

  return (
    <StyledNavbar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={(e) => setShowMenu(true)}
        >
          <StorefrontIcon
            sx={{ color: "#ff7800", fontSize: "35px", cursor: "pointer" }}
          />
        </IconButton>
        {isScreenSmaller ? (
          <Drawer
            anchor="left"
            open={showMenu}
            onClose={(e) => setShowMenu(false)}
          >
            <ListComponent setShowMenu={setShowMenu} />
          </Drawer>
        ) : (
          ""
        )}
        <Logo>Groco</Logo>
      </Toolbar>

      <NavbarLinkBox>
        {pages.map((page, index) => (
          <NavbarLink
            key={index}
            onClick={(e) => smoothScroller(page, setShowMenu)}
          >
            {page}
          </NavbarLink>
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
