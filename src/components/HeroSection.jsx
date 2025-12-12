import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#3a4b46",
        borderRadius: { xs: "0", md: "16px" },
        padding: { xs: "2rem 1.5rem", md: "4rem 3rem 2rem 3rem" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Text Content */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              color: "white",
              textAlign: { xs: "center", md: "left" },
              width: "100%",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: "#c3a510",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 600,
                lineHeight: 1.2,
                margin: 0,
                fontFamily: "Times",
              }}
            >
              Little Lemon
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                color: "white",
                fontSize: { xs: "1.5rem", md: "2rem" },
                marginTop: "0.25rem",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              Chicago
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontSize: { xs: "1rem", md: "1.1rem" },
                marginBottom: "2rem",
                maxWidth: "400px",
                lineHeight: 1.6,
              }}
            >
              We are a family owned Mediterranean Restaurant, focused on
              traditional recipes served with a modern twist.
            </Typography>
            <Button
              component={Link}
              to="/booking"
              variant="contained"
              sx={{
                backgroundColor: "#c3a510",
                color: "black",
                fontWeight: 600,
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                cursor: "pointer",
                textTransform: "none",
                fontSize: "1rem",
                display: { xs: "inline-block", md: "inline-block" },
                "&:hover": {
                  backgroundColor: "#c3a510",
                  borderColor: "black",
                },
              }}
            >
              Reserve a Table
            </Button>
          </Box>
        </Grid>

        {/* Image */}
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
              position: { xs: "relative", md: "absolute" },
              right: { md: "3rem" },
              top: { md: "1rem" },
              width: "100%",
              pointerEvents: "none",
            }}
          >
            <Box
              component="img"
              src="/src/assets/restauranfood.jpg"
              alt="food"
              sx={{
                width: { xs: "85%", md: "300px" },
                maxWidth: { xs: "350px", md: "300px" },
                height: { xs: "250px", md: "350px" },
                objectFit: "cover",
                borderRadius: "16px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                margin: { xs: "0 auto", md: "0" },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
