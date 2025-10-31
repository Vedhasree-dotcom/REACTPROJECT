import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

function AppointmentForm() {
  const [formData, setFormData] = useState({

    name: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    date: "",
    time: "",
  });

  const [isBooked, setIsBooked] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("userDetails"));
    if (!loggedUser) {
      alert("Please log in first to book an appointment!");
      navigate("/login"); 
      return;
    }

    setUser(loggedUser);

    setFormData((prev) => ({
      ...prev,
      name: loggedUser.name,
      email: loggedUser.email,
    }));

    const existingBooking = JSON.parse(
      localStorage.getItem(`booking_${loggedUser.email}`)
    );
    if (existingBooking) {
      setFormData(existingBooking);
      setIsBooked(true);
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.location ||
      !formData.service ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill all fields!");
      return;
    }

    localStorage.setItem(`booking_${user.email}`, JSON.stringify(formData));
    setIsBooked(true);
  };

  if (isBooked) {
    return (
      <div className="container text-center mt-5">
        <h2 className="text-success mb-3">Appointment Booked Successfully ✅</h2>
        <div
          className="card shadow p-4"
          style={{ borderRadius: "20px", backgroundColor: "#fff0f5" }}
        >
          <p><b>Name:</b> {formData.name}</p>
          <p><b>Email:</b> {formData.email}</p>
          <p><b>Phone:</b> {formData.phone}</p>
          <p><b>Location:</b> {formData.location}</p>
          <p><b>Service:</b> {formData.service}</p>
          <p><b>Date:</b> {formData.date}</p>
          <p><b>Time:</b> {formData.time}</p>

          <p className="text-success fw-bold mt-2">
            See you soon at Grace & Gloss 💖
          </p>

          <div className="d-flex justify-content-center gap-3 mt-3">
            <button
              className="btn"
              style={{ backgroundColor: "pink", color: "white" }}
              onClick={() => {

                localStorage.removeItem(`booking_${user.email}`);
                setFormData({
                  name: user.name,
                  email: user.email,
                  phone: "",
                  location: "",
                  service: "",
                  date: "",
                  time: "",
                });
                setIsBooked(false);
              }}
            >
              ↩️ Book Another Appointment
            </button>

            <button
              className="btn btn-dark"
              onClick={() => navigate("/summary")} 
            >
              📋 View Summary
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Grace & Gloss - Book Appointment</h2>
      <form className="w-75 mx-auto" onSubmit={handleSubmit}>
        <input
          name="name"
          className="form-control mb-3"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          readOnly
        />
        <input
          name="email"
          className="form-control mb-3"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          readOnly
        />
        <input
          name="phone"
          className="form-control mb-3"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          name="location"
          className="form-control mb-3"
          placeholder="Your Location"
          value={formData.location}
          onChange={handleChange}
        />

        <select
          name="service"
          className="form-control mb-3"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Select Service</option>
          <option>Hair Styling</option>
          <option>Facial</option>
          <option>Manicure</option>
          <option>Pedicure</option>
          <option>Bridal Makeup</option>
        </select>

        <input
          type="date"
          name="date"
          className="form-control mb-3"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="time"
          name="time"
          className="form-control mb-3"
          value={formData.time}
          onChange={handleChange}
        />

        <button
          className="btn w-100"
          style={{ backgroundColor: "rgb(226, 91, 114)", color: "white" }}
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;
