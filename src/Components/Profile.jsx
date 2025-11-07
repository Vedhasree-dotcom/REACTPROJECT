import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userDetails"));
    if (!storedUser) {
      alert("Please log in first!");
      navigate("/login");
      return;
    }

    setUser(storedUser);

    const userBookings =
      JSON.parse(localStorage.getItem(`bookings_${storedUser.email}`)) || [];
    setBookings(userBookings);
  }, [navigate]);

  const handleDeleteBooking = (index) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      const updatedBookings = bookings.filter((_, i) => i !== index);
      setBookings(updatedBookings);
      localStorage.setItem(
        `bookings_${user.email}`,
        JSON.stringify(updatedBookings)
      );
    }
  };

  if (!user) return null;

  return (
    <div className="profile-container">
      <h2 className="text-center mb-4">My Profile</h2>

      <div
        className="profile-card p-4 shadow"
        style={{
          backgroundColor: "#fff0f5",
          borderRadius: "20px",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <h4 className="text-center mb-3">Hello, {user.name} </h4>
        <p className="text-center"><b>Email:</b> {user.email}</p>

        <hr />
        <h5 className="text-center mt-3 mb-3">My Appointments</h5>

        {bookings.length === 0 ? (
          <>
            <p className="text-center">No appointment booked yet.</p>
            <div className="text-center">
              <button
                className="profile-btn mt-3"
                style={{
                  backgroundColor: "rgb(226, 91, 114)",
                  color: "white",
                  borderRadius: "10px",
                  padding: "8px 16px",
                }}
                onClick={() => navigate("/book")}
              >
                Book an Appointment
              </button>
            </div>
          </>
        ) : (
          bookings.map((b, index) => (
            <div
              key={index}
              className="booking-item mb-3 p-3 border rounded shadow-sm"
              style={{ backgroundColor: "white" }}
            >
              <p><b>Service:</b> {b.service}</p>
              <p><b>Location:</b> {b.location}</p>
              <p><b>Date:</b> {b.date}</p>
              <p><b>Time:</b> {b.time}</p>

              <div className="text-end">
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDeleteBooking(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}

        {bookings.length > 0 && (
          <div
            className="button-group mt-4 d-flex justify-content-between"
            style={{ gap: "10px" }}
          >
            <button
              className="btn w-50"
              style={{
                backgroundColor: "rgb(226, 91, 114)",
                color: "white",
                borderRadius: "10px",
              }}
              onClick={() => navigate("/book")}
            >
              Book Another
            </button>

            <button
              className="btn btn-dark w-50"
              style={{ borderRadius: "10px" }}
              onClick={() => navigate("/summary")}
            >
              View Summary
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
