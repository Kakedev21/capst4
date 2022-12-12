import React, { useState } from "react";

function Booking() {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  // Use the useState hook to create a piece of state to track the number of forms
  const [numForms, setNumForms] = React.useState(1);

  // This function will be called when the button is clicked
  const addForm = () => {
    // Increment the number of forms by 1
    setNumForms(numForms + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit the form data to the backend for processing
    // submitBooking(checkInDate, checkOutDate, guests);
  };

  // Use a loop or the map function to render the forms
  const forms = [];
  for (let i = 0; i < numForms; i++) {
    forms.push(
      <form key={i}>
        <input type="text" />
      </form>
    );
  }

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#777" }}>
      <form onSubmit={handleSubmit}>
        <label>
          Check-in Date:
          <input
            type="date"
            value={checkInDate}
            onChange={(event) => setCheckInDate(event.target.value)}
          />
        </label>

        <label>
          Check-out Date:
          <input
            type="date"
            value={checkOutDate}
            onChange={(event) => setCheckOutDate(event.target.value)}
          />
        </label>

        <label>
          Number of guests:
          <input
            type="number"
            min={1}
            value={guests}
            onChange={(event) => setGuests(event.target.value)}
          />
        </label>

        <button type="submit">Book</button>
      </form>
      {forms}
      <button onClick={addForm}>Add Form</button>
    </div>
  );
}

export default Booking;
