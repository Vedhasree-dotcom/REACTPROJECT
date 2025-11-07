import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingSummary() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ service: "", date: "", time: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userDetails"));
    if (!storedUser) {
      navigate("/login");
      return;
    }

    setUser(storedUser);

    const userBookings =
      JSON.parse(localStorage.getItem(`bookings_${storedUser.email}`)) || [];
    setBookings(userBookings);
  }, [navigate]);

  // ✅ Check if date/time slot is already booked (by any user)
  const isSlotTaken = (date, time, excludeIndex = null) => {
    for (let key in localStorage) {
      if (key.startsWith("bookings_")) {
        const userBookings = JSON.parse(localStorage.getItem(key)) || [];
        if (
          userBookings.some(
            (b, i) =>
              b.date === date &&
              b.time === time &&
              !(key === `bookings_${user.email}` && i === excludeIndex)
          )
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(bookings[index]);
    setError("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const { date, time } = formData;

    if (isSlotTaken(date, time, editingIndex)) {
      setError("⚠️ This date and time slot is already booked. Please choose another.");
      return;
    }

    const updated = [...bookings];
    updated[editingIndex] = formData;
    localStorage.setItem(`bookings_${user.email}`, JSON.stringify(updated));
    setBookings(updated);
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      const updated = bookings.filter((_, i) => i !== index);
      localStorage.setItem(`bookings_${user.email}`, JSON.stringify(updated));
      setBookings(updated);
    }
  };

  if (!user) return null;

  return (
    <div className="edit-booking-container">
      <div className="edit-booking-content">
        <h2>My Bookings Summary</h2>

        {bookings.length === 0 ? (
          <>
            <p>No bookings found.</p>
            <button
              className="btn"
              style={{ backgroundColor: "rgb(226, 91, 114)", color: "white" }}
              onClick={() => navigate("/book")}
            >
              Book an Appointment
            </button>
          </>
        ) : (
          bookings.map((b, index) => (
            <div key={index} className="booking-item mb-4 p-3 border rounded">
              {editingIndex === index ? (
                <form onSubmit={handleUpdate}>
                  <label>Service</label>
                  <input
                    type="text"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    required
                  />

                  <label>Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    required
                  />

                  <label>Time</label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    required
                  />

                  {error && (
                    <p style={{ color: "red", marginTop: "5px" }}>{error}</p>
                  )}

                  <div style={{ marginTop: "10px" }}>
                    <button
                      type="submit"
                      className="btn btn-success btn-sm me-2"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => setEditingIndex(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <p><b>Service:</b> {b.service}</p>
                  <p><b>Date:</b> {b.date}</p>
                  <p><b>Time:</b> {b.time}</p>
                  <button
                    className="btn btn-outline-primary btn-sm me-2"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm mt-2"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BookingSummary;
