import React, { useReducer, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      localStorage.setItem(`booking_${action.email}`, JSON.stringify(action.payload));
      return { booking: action.payload, isEditing: false };
    case "DELETE":
      localStorage.removeItem(`booking_${action.email}`);
      return { booking: null, isEditing: false };
    case "CLEAR":
      localStorage.removeItem(`booking_${action.email}`);
      return { booking: null, isEditing: false };
    default:
      return state;
  }
}

function BookingSummary() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editData, setEditData] = useState({});
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("userDetails"));
    if (!loggedUser) {
      alert("Please log in first!");
      navigate("/login");
      return;
    }

    setUser(loggedUser);

    const savedBooking = JSON.parse(localStorage.getItem(`booking_${loggedUser.email}`));
    if (savedBooking) {
      dispatch({ type: "LOAD", payload: savedBooking });
    }
  }, [navigate]);

  if (!user) return null;

  if (!state.booking) {
    return (
      <div className="text-center mt-5">
        <h3>No Appointment Found for {user.name}!</h3>
        <p>Please book your appointment first!</p>
        <button
          className="btn mt-3"
          style={{ backgroundColor: "pink", color: "white" }}
          onClick={() => navigate("/book")}
        >
          Go to Booking Page
        </button>
      </div>
    );
  }

  function isWithinTwoHours(bookingDate, bookingTime) {
    const appointmentTime = new Date(`${bookingDate} ${bookingTime}`);
    const now = new Date();
    const difference = appointmentTime - now;
    const hours = difference / (1000 * 60 * 60);

    if (hours <= 2 && hours > 0) {
      return true; 
    } else {
      return false; 
    }
  }

  const withinTwoHours = isWithinTwoHours(state.booking.date, state.booking.time);

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE", payload: editData, email: user.email });
    alert("Booking updated successfully!");
  };

  if (!state.isEditing) {
    return (
      <div className="container text-center mt-5">
        <h2>Booking Summary for {user.name}</h2>
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
              disabled={withinTwoHours}
              style={{
                opacity: withinTwoHours ? 0.5 : 1,
                cursor: withinTwoHours ? "not-allowed" : "pointer",
              }}
              onClick={() => {
                if (withinTwoHours) {
                  alert("Editing not allowed within 2 hours of your appointment. Please contact the salon directly.");
                  return;
                }
                setEditData(state.booking);
                dispatch({ type: "EDIT" });
              }}
            >
              ✏️ Edit
            </button>

            <button
              className="btn btn-danger"
              disabled={withinTwoHours}
              style={{
                opacity: withinTwoHours ? 0.5 : 1,
                cursor: withinTwoHours ? "not-allowed" : "pointer",
              }}
              onClick={() => {
                if (withinTwoHours) {
                  alert("Cancellation not allowed within 2 hours of your appointment. Please contact the salon directly.");
                  return;
                }
                if (window.confirm("Are you sure you want to cancel this booking?")) {
                  dispatch({ type: "DELETE", email: user.email });
                }
              }}
            >
              🗑️ Cancel
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => {
                if (window.confirm("Clear all booking data?")) {
                  dispatch({ type: "CLEAR", email: user.email });
                }
              }}
            >
              Clear All
            </button>
          </div>

          {withinTwoHours && (
            <p className="text-danger fw-bold mt-3">
              ⚠️ Editing or cancellation not allowed within 2 hours of your appointment.<br />
              Please contact the salon directly.
            </p>
          )}

          <p className="text-success fw-bold mt-3">
            See you soon at Grace & Gloss 💖
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5 text-center">
      <h2>✏️ Edit Booking</h2>
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

        <button className="btn btn-success w-100 mt-2">Save Changes</button>
      </form>
    </div>
  );
}

export default BookingSummary;
