import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Link,
} from "@mui/material";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

export default function Card({ img, title, price, description }) {
  return (
    <MuiCard
      sx={{
        backgroundColor: "#d9d9d9",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardMedia
        component="img"
        image={img}
        alt={title}
        sx={{
          height: { xs: 200, md: 250 },
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ flexGrow: 1, padding: "1rem" }}>
        {/* Name and Price */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <Typography
            variant="h6"
            component="h4"
            sx={{ fontWeight: 600, margin: 0 }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#c3a510", fontWeight: 600 }}
          >
            ${price.toFixed(2)}
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            marginBottom: "1rem",
            color: "#333",
            textAlign: "left",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            hyphens: "auto",
          }}
        >
          {description}
        </Typography>

        {/* Order Link */}
        <Link
          href="#"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "black",
            textDecoration: "none",
            fontWeight: 600,
            "&:hover": {
              textShadow: "0.5px 0 0.5px currentColor",
            },
          }}
        >
          Order a delivery
          <DeliveryDiningIcon
            alt="delivery icon"
            sx={{ width: "20px", height: "20px" }}
          />
        </Link>
      </CardContent>
    </MuiCard>
  );
}
