import { Link } from "react-router-dom";
import { Box, Typography, Grid, Stack } from "@mui/material";

export default function Footer() {
  const footerLinks = {
    navigation: [
      { text: "Home", path: "/" },
      { text: "About", path: "/" },
      { text: "Reservation", path: "/booking" },
      { text: "Menu", path: "/" },
      { text: "Order Online", path: "/" },
      { text: "Login", path: "/" },
    ],
    contact: [{ text: "Address", path: "/" }],
    social: [
      { text: "Facebook", path: "/" },
      { text: "Instagram", path: "/" },
    ],
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#d9d9d9",
        padding: { xs: "2rem 1.5rem", md: "2rem 2rem" },
        marginTop: "auto",
      }}
    >
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        justifyContent="flex-start"
        alignItems="center"
      >
        {/* Logo */}
        <Grid item xs={12} md="auto">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src="/src/assets/Logo.svg"
              alt="restaurant logo"
              sx={{
                width: { xs: "150px", md: "180px" },
                height: "auto",
                transform: { xs: "none", md: "rotate(-90deg)" },
                display: "block",
              }}
            />
          </Box>
        </Grid>

        {/* Footer Links */}
        <Grid item xs={12} md={9}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            justifyContent="flex-start"
          >
            {/* Doormat Navigation */}
            <Grid item xs={12} sm={4}>
              <Stack spacing={1} alignItems="flex-start">
                <Typography
                  variant="h6"
                  sx={{
                    color: "#3a4b46",
                    fontWeight: 600,
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Doormat Navigation
                </Typography>
                {footerLinks.navigation.map((link) => (
                  <Link
                    key={link.text}
                    to={link.path}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    {link.text}
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* Contact */}
            <Grid item xs={12} sm={4}>
              <Stack spacing={1} alignItems="flex-start">
                <Typography
                  variant="h6"
                  sx={{
                    color: "#3a4b46",
                    fontWeight: 600,
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Contact
                </Typography>
                {footerLinks.contact.map((link) => (
                  <Link
                    key={link.text}
                    to={link.path}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    {link.text}
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* Social Media */}
            <Grid item xs={12} sm={4}>
              <Stack spacing={1} alignItems="flex-start">
                <Typography
                  variant="h6"
                  sx={{
                    color: "#3a4b46",
                    fontWeight: 600,
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Social Media Links
                </Typography>
                {footerLinks.social.map((link) => (
                  <Link
                    key={link.text}
                    to={link.path}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    {link.text}
                  </Link>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
