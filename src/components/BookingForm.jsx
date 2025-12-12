import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import * as yup from "yup";

const FormContainer = styled("form")(() => ({
  display: "grid",
  maxWidth: "250px",
  gap: "20px",
  marginTop: "2rem",
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
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const schema = yup.object().shape({
    date: yup
      .date()
      .required("Date is required")
      .min(new Date(), "Date cannot be in the past"),

    time: yup.string().required("Time is required"),

    guest: yup
      .number()
      .required("Number of guests required")
      .min(1, "At least 1 guest")
      .max(10, "Max 10 guests"),

    occasion: yup.string().required("Occasion is required"),
  });

  async function validateForm() {
    try {
      await schema.validate(
        { date, time, guest, occasion },
        { abortEarly: false }
      );
      setErrors({});
      setIsValid(true);
    } catch (err) {
      // mapping the errors
      const formattedErrors = {};
      err.inner.forEach((e) => {
        formattedErrors[e.path] = e.message;
      });

      setErrors(formattedErrors);
      setIsValid(false);
    }
  }

  useEffect(() => {
    validateForm();
  }, [date, time, guest, occasion]);

  async function handleSubmit(e) {
    e.preventDefault();
    setTouched({
      date: true,
      time: true,
      guest: true,
      occasion: true,
    });

    await validateForm(); // ensures the form is valid
    if (!isValid) return; // stops submission if the form is invalid

    const formData = { date, time, guest, occasion };

    submitForm(formData); // sends form data to the parent
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          color: "#3a4b46",
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          fontWeight: 600,
          lineHeight: 1.2,
          margin: 0,
          marginBottom: "1rem",
          fontFamily: "Times",
        }}
      >
        Reservation
      </Typography>
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
        onBlur={() => setTouched((prev) => ({ ...prev, date: true }))}
        InputLabelProps={{ shrink: true }}
        required
        error={touched.date && !!errors.date}
        helperText={touched.date ? errors.date : ""}
      />

      {/* time dropdown*/}
      <FormControl>
        <InputLabel id="time-select-label">Choose Time</InputLabel>
        <Select
          labelId="time-select-label"
          id="time-select"
          value={time}
          label="Choose Time"
          onChange={(e) => setTime(e.target.value)}
          sx={{ textAlign: "left" }}
          required
          onBlur={() => setTouched((prev) => ({ ...prev, time: true }))}
        >
          {availableTimes.map((t) => (
            <MenuItem key={t} value={t}>
              {t}
            </MenuItem>
          ))}
        </Select>
        {touched.time && errors.time && (
          <p
            style={{
              color: "#d3302f",
              fontSize: "0.8rem",
              textAlign: "left",
              margin: "0",
              marginLeft: "0.8rem",
            }}
          >
            {errors.time}
          </p>
        )}
      </FormControl>

      {/* guests */}
      <TextField
        label="Number of Guests"
        type="number"
        value={guest}
        onChange={(e) => setGuest(e.target.value)}
        onBlur={() => setTouched((prev) => ({ ...prev, guest: true }))}
        inputProps={{ min: 1, max: 10 }}
        required
        error={touched.guest && !!errors.guest}
        helperText={touched.guest ? errors.guest : ""}
      />

      {/* occasion */}
      <FormControl>
        <InputLabel id="occasion-select-lable">Occasion</InputLabel>
        <Select
          labelId="occasion-select-lable"
          label="Occasion"
          id="occasion-select"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, occasion: true }))}
          sx={{ textAlign: "left" }}
          required
        >
          <MenuItem value="birthday">Birthday</MenuItem>
          <MenuItem value="anniversary">Anniversary</MenuItem>
        </Select>
        {touched.occasion && errors.occasion && (
          <p
            style={{
              color: "#d3302f",
              fontSize: "0.8rem",
              textAlign: "left",
              margin: "0",
              marginLeft: "0.8rem",
            }}
          >
            {errors.occasion}
          </p>
        )}
      </FormControl>

      {/* submit */}
      <Button
        variant="contained"
        type="submit"
        disabled={!isValid}
        sx={{
          borderRadius: "8px",
          padding: "0.75rem 1.5rem",
          fontSize: "1em",
          fontWeight: 600,
          backgroundColor: "#c3a510",
          color: "black",
          cursor: "pointer",
          textTransform: "none",
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
