import React from "react";

function Profile() {
  const user = JSON.parse(localStorage.getItem("userDetails"));
  const bookingData = JSON.parse(localStorage.getItem("bookingDetails"));

  if (!user) {
    return (
      <div className="text-center mt-5">
        <h3>No Profile Found </h3>
        <p>Please log in first to view your profile.</p>
        <button
          className="btn mt-3"
          style={{ backgroundColor: "pink", color: "white" }}
          onClick={() => (window.location.href = "/login")}
        >
          Go to Login Page
        </button>
      </div>
    );
  }

  return (
    <div className="container text-center mt-5">
      <h2> Your Profile</h2>
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
              style={{ backgroundColor: "pink", color: "white" }}
              onClick={() => (window.location.href = "/book")}
            >
              Book an Appointment
            </button>
          </>
        ) : (
          <>
            <p><b>Service:</b> {bookingData.service}</p>
            <p><b>Date:</b> {bookingData.date}</p>
            <p><b>Time:</b> {bookingData.time}</p>
            
            <button
              className="btn mt-3"
              style={{ backgroundColor: "pink", color: "white" }}
              onClick={() => (window.location.href = "/book")}
            >
              Book Another Appointment
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
