import { Box } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "../reducers/bookingReducer";

export default function BookingPage() {
  // date picked by the user
  const [selectedDate, setSelectedDate] = useState(new Date());

  // list of available time slots
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [], // initial empty state
    initializeTimes // initializer
  );

  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);

    if (success) {
      navigate("/confirmed");
    }
  };

  // useEffect to update times whenever selected date changes
  useEffect(() => {
    // dispatch action with selectd date
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  }, [selectedDate]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // minHeight: "100vh",
        }}
      >
        <BookingForm
          availableTimes={availableTimes}
          setSelectedDate={setSelectedDate} // BookingForm notifies when date changes
          submitForm={submitForm}
        />
      </Box>
    </>
  );
}
