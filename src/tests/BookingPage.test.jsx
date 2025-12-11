import { render, screen, cleanup } from "@testing-library/react";
import { describe, test, afterEach, expect, vi } from "vitest";
import BookingForm from "../components/BookingForm";
import { initializeTimes, updateTimes } from "../reducers/bookingReducer";

describe("Reservation Form", () => {
  afterEach(() => {
    cleanup();
  });

  test("Renders the booking heading", () => {
    const mockDispatch = () => {};
    const mockAvailableTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];

    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
      />
    );
    const headingElement = screen.getByText("Make A Reservation");
    expect(headingElement).toBeInTheDocument();
  });

  test("initializeTimes returns the provided value by fetchAPI", () => {
    // mocking fetchAPI
    global.fetchAPI = vi.fn(() => ["17:00", "18:00", "19:00"]);
    const result = initializeTimes();
    expect(global.fetchAPI).toHaveBeenCalled();
    expect(result).toEqual(["17:00", "18:00", "19:00"]);
  });

  test("updateTimes returns the value from fetchAPI when called with a date", () => {
    global.fetchAPI = vi.fn(() => ["20:00", "21:00"]);

    const initialState = [];
    const action = { type: "UPDATE_TIMES", date: new Date() };

    const result = updateTimes(initialState, action);

    expect(global.fetchAPI).toHaveBeenCalled();
    expect(result).toEqual(["20:00", "21:00"]);
  });
});
