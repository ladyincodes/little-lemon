import { Box, Typography, Grid } from "@mui/material";

export default function About() {
  return (
    <Box
      component="section"
      aria-labelledby="about-heading"
      sx={{
        marginTop: { xs: "3rem", md: "4rem" },
        marginBottom: { xs: "2rem", md: "2rem" },
        position: "relative",
      }}
    >
      <Grid container spacing={4} alignItems="flex-start">
        {/* Text Content */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              textAlign: "left",
              paddingLeft: { xs: "1rem", md: "1.5rem" },
              paddingRight: { xs: "1rem", md: 0 },
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              id="about-heading"
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
              component="p"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
                maxWidth: "500px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis
              pretium ex. Morbi consequat, mi non venenatis accumsan, augue
              neque porta nulla, ac mattis ex erat ac est. Ut sodales convallis
              feugiat. Sed consectetur, odio eu vulputate maximus, purus nibh
              semper eros, et rhoncus dolor augue quis justo. Sed vulputate.
            </Typography>
          </Box>
        </Grid>

        {/* Images - Hidden on mobile */}
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
          <Box
            role="img"
            aria-label="Photos of restaurant owners Mario and Adrian"
            sx={{
              display: "flex",
              gap: "1rem",
              justifyContent: "flex-end",
              position: "absolute",
              right: "2rem",
              top: 0,
            }}
          >
            <Box
              component="img"
              src="/src/assets/Mario and Adrian A.jpg"
              alt="Mario and Adrian standing together"
              sx={{
                width: "200px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "16px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                position: "relative",
                zIndex: 1,
              }}
            />
            <Box
              component="img"
              src="/src/assets/Mario and Adrian b.jpg"
              alt="Mario and Adrian cooking"
              sx={{
                width: "200px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "16px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                position: "relative",
                zIndex: 2,
                marginTop: "-3rem",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
