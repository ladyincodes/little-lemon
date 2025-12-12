import { Box, Typography } from "@mui/material";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      username: "John Doe",
      comment: "Great food and excellent service!",
      image: "/src/assets/user1.jpg",
    },
    {
      rating: 5,
      username: "Jane Smith",
      comment: "Amazing experience, highly recommend!",
      image: "/src/assets/user2.jpg",
    },
    {
      rating: 4,
      username: "Mike Johnson",
      comment: "Delicious Mediterranean cuisine!",
      image: "/src/assets/user3.jpg",
    },
    {
      rating: 5,
      username: "Sarah Williams",
      comment: "Best restaurant in Chicago!",
      image: "/src/assets/user4.jpg",
    },
  ];

  return (
    <Box
      sx={{
        padding: { xs: "3rem 1.5rem", md: "4rem 2rem" },
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/restaurant.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: { xs: "0", md: "16px" },
        marginTop: { xs: "2rem", md: "0" },
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontSize: { xs: "2rem", md: "2.5rem" },
          fontWeight: 600,
          marginBottom: { xs: "2rem", md: "2rem" },
          color: "white",
          fontFamily: "Times",
        }}
      >
        Testimonials
      </Typography>

      {/* Cards Section */}
      <Box
        sx={{
          display: { xs: "flex", md: "grid" },
          gridTemplateColumns: { md: "repeat(4, 1fr)" },
          gap: { xs: "1rem", md: "1.5rem" },
          overflowX: { xs: "auto", md: "visible" },
          paddingBottom: { xs: "1rem", md: "0" },
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            sx={{
              minWidth: { xs: "70vw", sm: "280px", md: "auto" },
              maxWidth: { xs: "80vw", sm: "350px", md: "100%" },
              flex: { xs: "0 0 auto", md: "unset" },
            }}
          >
            <TestimonialCard
              rating={testimonial.rating}
              username={testimonial.username}
              comment={testimonial.comment}
              image={testimonial.image}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
