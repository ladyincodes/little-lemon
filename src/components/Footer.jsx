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
      role="contentinfo"
      aria-label="Site footer"
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
            <Link to="/" aria-label="Little Lemon Restaurant home page">
              <Box
                component="img"
                src="/src/assets/Logo.svg"
                alt="Little Lemon Restaurant logo"
                sx={{
                  width: { xs: "150px", md: "180px" },
                  height: "auto",
                  transform: { xs: "none", md: "rotate(-90deg)" },
                  display: "block",
                }}
              />
            </Link>
          </Box>
        </Grid>

        {/* Footer Links */}
        <Grid item xs={12} md={9}>
          <Grid
            container
            spacing={{ xs: 2, md: 6 }}
            justifyContent="flex-start"
          >
            {/* Doormat Navigation */}
            <Grid item xs={12} sm={4}>
              <Box component="nav" aria-labelledby="footer-nav-heading">
                <Typography
                  variant="h6"
                  component="h2"
                  id="footer-nav-heading"
                  sx={{
                    color: "#3a4b46",
                    fontWeight: 600,
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Doormat Navigation
                </Typography>
                <Stack
                  component="ul"
                  spacing={1}
                  alignItems="flex-start"
                  sx={{ listStyle: "none", margin: 0, padding: 0 }}
                >
                  {footerLinks.navigation.map((link) => (
                    <Box component="li" key={link.text}>
                      <Link
                        to={link.path}
                        style={{
                          color: "black",
                          textDecoration: "none",
                          fontSize: "0.9rem",
                        }}
                      >
                        {link.text}
                      </Link>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* Contact */}
            <Grid item xs={12} sm={4}>
              <Box aria-labelledby="footer-contact-heading">
                <Typography
                  variant="h6"
                  component="h2"
                  id="footer-contact-heading"
                  sx={{
                    color: "#3a4b46",
                    fontWeight: 600,
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Contact
                </Typography>
                <Stack
                  component="ul"
                  spacing={1}
                  alignItems="flex-start"
                  sx={{ listStyle: "none", margin: 0, padding: 0 }}
                >
                  {footerLinks.contact.map((link) => (
                    <Box component="li" key={link.text}>
                      <Link
                        to={link.path}
                        style={{
                          color: "black",
                          textDecoration: "none",
                          fontSize: "0.9rem",
                        }}
                      >
                        {link.text}
                      </Link>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* Social Media */}
            <Grid item xs={12} sm={4}>
              <Box component="nav" aria-labelledby="footer-social-heading">
                <Typography
                  variant="h6"
                  component="h2"
                  id="footer-social-heading"
                  sx={{
                    color: "#3a4b46",
                    fontWeight: 600,
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Social Media Links
                </Typography>
                <Stack
                  component="ul"
                  spacing={1}
                  alignItems="flex-start"
                  sx={{ listStyle: "none", margin: 0, padding: 0 }}
                >
                  {footerLinks.social.map((link) => (
                    <Box component="li" key={link.text}>
                      <Link
                        to={link.path}
                        style={{
                          color: "black",
                          textDecoration: "none",
                          fontSize: "0.9rem",
                        }}
                      >
                        {link.text}
                      </Link>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
