import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Link } from "react-router-dom";

export default function ConfirmedBooking() {
  return (
    <Box
      sx={{
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          padding: 3,
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            Booking Confirmed
            <CheckCircleRoundedIcon color="success" sx={{ ml: 1 }} />
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            Your reservation has been successfully submitted. We’re excited to
            have you!
          </Typography>

          <Button
            variant="contained"
            component={Link}
            to="/"
            sx={{
              borderRadius: "8px",
              border: "1px solid transparent",
              padding: "0.6em 1.2em",
              fontSize: "1em",
              fontWeight: 500,
              fontFamily: "inherit",
              backgroundColor: "#c3a510",
              color: "black",
              cursor: "pointer",
              transition: "border-color 0.25s",
              width: "fit-content",
              minWidth: "auto",
              "&:hover": {
                borderColor: "black",
                backgroundColor: "#c3a510",
              },
            }}
          >
            Return Home
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
