import { Box, Typography, Button, Grid } from "@mui/material";
import greekSaladImg from "../assets/greek salad.jpg";
import bruschettaImg from "../assets/bruschetta.jpg";
import lemonDessertImg from "../assets/lemon dessert.jpg";

import Card from "./Card";

export default function Highlights() {
  const items = [
    {
      title: "Greek Salad",
      price: 12.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
      img: greekSaladImg,
    },
    {
      title: "Bruschetta",
      price: 5.99,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      img: bruschettaImg,
    },
    {
      title: "Lemon Dessert",
      price: 5.0,
      description:
        "This comes straight form grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined . ",
      img: lemonDessertImg,
    },
  ];
  return (
    <Box
      component="section"
      aria-labelledby="specials-heading"
      sx={{
        marginTop: { xs: "3rem", md: "4rem" },
        marginBottom: { xs: "3rem", md: "4rem" },
      }}
    >
      {/* Heading Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: "1rem", md: "0" },
          marginBottom: { xs: "2rem", md: "2rem" },
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          id="specials-heading"
          sx={{
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            fontWeight: 600,
          }}
        >
          This weeks specials
        </Typography>
        <Button
          variant="contained"
          aria-label="View full online menu"
          sx={{
            backgroundColor: "#c3a510",
            color: "black",
            fontWeight: 600,
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            textTransform: "none",
            cursor: "pointer",
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#c3a510",
              borderColor: "black",
            },
          }}
        >
          Online Menu
        </Button>
      </Box>

      {/* Cards Section */}
      <Box
        component="ul"
        role="list"
        aria-label="Weekly special menu items"
        sx={{
          display: { xs: "flex", md: "grid" },
          gridTemplateColumns: { md: "repeat(3, 1fr)" },
          gap: { xs: "1rem", md: "1.5rem" },
          overflowX: { xs: "auto", md: "visible" },
          listStyle: "none",
          margin: 0,
          padding: 0,
          paddingBottom: { xs: "1rem", md: "0" },
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item, index) => (
          <Box
            component="li"
            key={index}
            role="listitem"
            sx={{
              minWidth: { xs: "75vw", sm: "320px", md: "auto" },
              maxWidth: { xs: "85vw", sm: "400px", md: "100%" },
              flex: { xs: "0 0 auto", md: "unset" },
            }}
          >
            <Card
              img={item.img}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
