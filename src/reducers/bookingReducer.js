// initialize times
export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

// reducer function
export function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(action.date); // date will be a Date object
  }

  return state;
}
