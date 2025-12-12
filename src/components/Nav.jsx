import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/" },
    { text: "Reservation", path: "/booking" },
    { text: "Menu", path: "/" },
    { text: "Order Online", path: "/" },
    { text: "Login", path: "/" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
          margin: "0",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            padding: { xs: "1rem 1rem", md: "1rem 1rem" },
            minHeight: "auto",
          }}
        >
          {/* Logo */}
          <Link to="/">
            <Box
              component="img"
              src="/src/assets/Logo.svg"
              alt="restaurant logo"
              sx={{
                width: { xs: "120px", md: "200px" },
                height: "auto",
                cursor: "pointer",
                marginLeft: "-1rem",
              }}
            />
          </Link>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: "1.5rem" }}>
              {menuItems.map((item) => (
                <Link
                  key={item.text}
                  to={item.path}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  {item.text}
                </Link>
              ))}
            </Box>
          )}

          {/* Mobile Hamburger Icon */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
              >
                <ListItemText
                  primary={item.text}
                  sx={{ color: "black", fontWeight: 600 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
