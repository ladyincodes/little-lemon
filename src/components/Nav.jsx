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
    <Box component="nav" role="navigation" aria-label="Main navigation">
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
          <Link to="/" aria-label="Little Lemon Restaurant home page">
            <Box
              component="img"
              src="/src/assets/Logo.svg"
              alt="Little Lemon Restaurant logo"
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
            <Box
              component="ul"
              role="list"
              sx={{
                display: "flex",
                gap: "1.5rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {menuItems.map((item) => (
                <Box component="li" key={item.text}>
                  <Link
                    to={item.path}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    {item.text}
                  </Link>
                </Box>
              ))}
            </Box>
          )}

          {/* Mobile Hamburger Icon */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
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
        aria-label="Mobile navigation menu"
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={handleDrawerToggle}
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List component="nav" aria-label="Main navigation links">
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
    </Box>
  );
}
