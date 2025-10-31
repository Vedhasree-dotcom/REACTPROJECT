import React, { useReducer, useEffect, useState } from "react";

const initialState = {
  booking: null,
  isEditing: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOAD":
      return { ...state, booking: action.payload, isEditing: false };

    case "EDIT":
      return { ...state, isEditing: true };

    case "UPDATE":
      localStorage.setItem("bookingData", JSON.stringify(action.payload));
      return { booking: action.payload, isEditing: false };

    case "DELETE":
      localStorage.removeItem("bookingData");
      return { booking: null, isEditing: false };

    case "CLEAR":
      localStorage.clear();
      return { booking: null, isEditing: false };

    default:
      return state;
  }
}

function BookingSummary() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editData, setEditData] = useState({});

  // Load booking data from localStorage
  useEffect(() => {
    const savedBooking = JSON.parse(localStorage.getItem("bookingData"));
    if (savedBooking) {
      dispatch({ type: "LOAD", payload: savedBooking });
    }
  }, []);

  if (!state.booking) {
    return (
      <div className="text-center mt-5">
        <h3>No Appointment Found !</h3>
        <p>Please book your appointment first!</p>
        <button
          className="btn mt-3"
          style={{ backgroundColor: "pink", color: "white" }}
          onClick={() => (window.location.href = "/book")}
        >
          Go to Booking Page
        </button>
      </div>
    );
  }

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE", payload: editData });
    alert("Booking updated successfully ");
  };


  if (!state.isEditing) {
    return (
      <div className="container text-center mt-5">
        <h2>💅 Booking Summary</h2>
        <div
          className="card shadow mt-4 p-4"
          style={{ borderRadius: "20px", backgroundColor: "#fff0f5" }}
        >
          <p><b>Name:</b> {state.booking.name}</p>
          <p><b>Email:</b> {state.booking.email}</p>
          <p><b>Phone:</b> {state.booking.phone}</p>
          <p><b>Service:</b> {state.booking.service}</p>
          <p><b>Date:</b> {state.booking.date}</p>
          <p><b>Time:</b> {state.booking.time}</p>

          <div className="d-flex justify-content-center gap-3 mt-3">
            <button
              className="btn btn-warning text-white"
              onClick={() => {
                setEditData(state.booking);
                dispatch({ type: "EDIT" });
              }}
            >
              ✏️ Edit
            </button>

            <button
              className="btn btn-danger"
              onClick={() => {
                if (window.confirm("Are you sure to delete booking?")) {
                  dispatch({ type: "DELETE" });
                }
              }}
            >
              🗑️ Delete
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => {
                if (window.confirm("Clear all data?")) {
                  dispatch({ type: "CLEAR" });
                }
              }}
            >
               Clear All
            </button>
          </div>

          <p className="text-success fw-bold mt-3">
            See you soon at Grace & Gloss 💖
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5 text-center">
      <h2>✏️ Edit Appointment</h2>
      <form
        className="w-75 mx-auto card shadow p-4"
        style={{ backgroundColor: "#fff0f5", borderRadius: "20px" }}
        onSubmit={handleUpdate}
      >
        <input
          className="form-control mb-3"
          name="name"
          value={editData.name}
          onChange={handleEditChange}
        />
        <input
          className="form-control mb-3"
          name="email"
          value={editData.email}
          onChange={handleEditChange}
        />
        <input
          className="form-control mb-3"
          name="phone"
          value={editData.phone}
          onChange={handleEditChange}
        />
        <input
          className="form-control mb-3"
          name="service"
          value={editData.service}
          onChange={handleEditChange}
        />
        <input
          type="date"
          className="form-control mb-3"
          name="date"
          value={editData.date}
          onChange={handleEditChange}
        />
        <input
          type="time"
          className="form-control mb-3"
          name="time"
          value={editData.time}
          onChange={handleEditChange}
        />

        <button className="btn btn-success w-100 mt-2"> Save Changes</button>
      </form>
    </div>
  );
}

export default BookingSummary;
