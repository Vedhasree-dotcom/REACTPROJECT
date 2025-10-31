import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {

    const storedUser = JSON.parse(localStorage.getItem("userDetails"));
    if (!storedUser) {
      alert("Please log in first!");
      navigate("/login");
      return;
    }

    setUser(storedUser);


    const userBooking = JSON.parse(localStorage.getItem(`booking_${storedUser.email}`));
    setBookingData(userBooking);
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="container text-center mt-5">
      <h2>Your Profile</h2>
      <div
        className="card mt-4 shadow p-4"
        style={{ backgroundColor: "#fff0f5", borderRadius: "20px" }}
      >
        <h4>{user.name}</h4>
        <p><b>Email:</b> {user.email}</p>

        <hr />
        <h5>💅 Booking Summary</h5>

        {!bookingData ? (
          <>
            <p>No appointment booked yet.</p>
            <button
              className="btn mt-3"
              style={{ backgroundColor: "rgb(226, 91, 114)", color: "white" }}
              onClick={() => navigate("/book")}
            >
              Book an Appointment
            </button>
          </>
        ) : (
          <>
            <p><b>Service:</b> {bookingData.service}</p>
            <p><b>Date:</b> {bookingData.date}</p>
            <p><b>Time:</b> {bookingData.time}</p>

            <div className="d-flex justify-content-center gap-3 mt-3">
              <button
                className="btn text-white"
                style={{backgroundColor: "rgb(226, 91, 114)"}}
                onClick={() => navigate("/book")}
              >
                 Book Another Appointment
              </button>

              <button
                className="btn btn-danger"
                onClick={() => {
                  if (alert("Are you sure to delete this booking?")) {
                    localStorage.removeItem(`booking_${user.email}`);
                    setBookingData(null);
                  }
                }}
              >
                🗑️ Delete Booking
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
