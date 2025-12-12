import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Rating,
} from "@mui/material";

export default function TestimonialCard({ rating, username, comment, image }) {
  return (
    <Card
      sx={{
        backgroundColor: "#d9d9d9",
        borderRadius: "16px",
        padding: "0.6rem",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: { xs: "130px", md: "140px" },
      }}
    >
      <CardContent sx={{ padding: 0, "&:last-child": { paddingBottom: 0 } }}>
        {/* Rating */}
        <Rating
          value={rating}
          readOnly
          size="small"
          sx={{
            marginBottom: "0.4rem",
            "& .MuiRating-iconFilled": {
              color: "#c3a510",
            },
          }}
        />

        {/* User Info */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            marginBottom: "0.4rem",
          }}
        >
          <Avatar src={image} alt={username} sx={{ width: 28, height: 28 }} />
          <Typography
            variant="body2"
            sx={{ fontWeight: 600, color: "#333", fontSize: "0.85rem" }}
          >
            {username}
          </Typography>
        </Box>

        {/* Comment */}
        <Typography
          variant="body2"
          sx={{
            color: "#333",
            textAlign: "left",
            fontSize: "0.85rem",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {comment}
        </Typography>
      </CardContent>
    </Card>
  );
}
