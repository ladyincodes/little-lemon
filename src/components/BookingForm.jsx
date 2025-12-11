import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const FormContainer = styled("form")(() => ({
  display: "grid",
  maxWidth: "250px",
  gap: "20px",
}));

export default function BookingForm({
  availableTimes,
  setSelectedDate,
  submitForm,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState(1);
  const [occasion, setOccasion] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = { date, time, guest, occasion };

    submitForm(formData); // sends form data to the parent
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>Make A Reservation</h1>
      {/* date */}
      <TextField
        label="Choose Date"
        type="date"
        value={date}
        onChange={(e) => {
          const selected = e.target.value;
          setDate(selected);

          // converts string to date
          const d = new Date(selected);
          setSelectedDate(d);
        }}
        InputLabelProps={{ shrink: true }}
      />

      {/* time dropdown*/}
      <FormControl>
        <InputLabel>Choose Time</InputLabel>
        <Select
          value={time}
          label="Choose Time"
          onChange={(e) => setTime(e.target.value)}
          sx={{ textAlign: "left" }}
        >
          {availableTimes.map((t) => (
            <MenuItem key={t} value={t}>
              {t}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* guests */}
      <TextField
        label="Number of Guests"
        type="number"
        value={guest}
        onChange={(e) => setGuest(e.target.value)}
        inputProps={{ min: 1, max: 10 }}
      />

      {/* occasion */}
      <FormControl>
        <InputLabel>Occasion</InputLabel>
        <Select
          label="Occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          sx={{ textAlign: "left" }}
        >
          <MenuItem value="birthday">Birthday</MenuItem>
          <MenuItem value="anniversary">Anniversary</MenuItem>
        </Select>
      </FormControl>

      {/* submit */}
      <Button
        variant="contained"
        type="submit"
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
          // justifySelf: "center",
          margin: "1.2rem auto",
          "&:hover": {
            borderColor: "black",
            backgroundColor: "#c3a510",
          },
        }}
      >
        Reserve Now
      </Button>
    </FormContainer>
  );
}
