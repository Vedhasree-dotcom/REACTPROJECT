import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  const [dateTimeTaken, setDateTimeTaken] = useState(false);
  const [phoneError, setPhoneError] = useState("");

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
  }, [navigate]);

  
  const checkDateTimeAvailability = (selectedDate, selectedTime) => {
    const allUserBookings = Object.keys(localStorage)
      .filter((key) => key.startsWith("bookings_"))
      .flatMap((key) => JSON.parse(localStorage.getItem(key)) || []);

    const taken = allUserBookings.some(
      (b) => b.date === selectedDate && b.time === selectedTime
    );

    setDateTimeTaken(taken);
  };

  const handleChange = (e) => {
  const { name, value } = e.target;
  const updated = { ...formData, [name]: value };
  setFormData(updated);

  if (name === "date" || name === "time") {
    checkDateTimeAvailability(updated.date, updated.time);
  }

  if (name === "phone") {
    const phoneRegex = /^[6-9]\d{9}$/; 
    if (!phoneRegex.test(value)) {
      setPhoneError("⚠️ Please enter a valid 10-digit phone number");
    } else {
      setPhoneError("");
    }
  }
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

    if (dateTimeTaken) {
      alert(
        `Sorry, this ${formData.date} at ${formData.time} slot is already booked!`
      );
      return;
    }

    const existingBookings =
      JSON.parse(localStorage.getItem(`bookings_${user.email}`)) || [];

    const sameUserDuplicate = existingBookings.some(
      (b) => b.date === formData.date && b.time === formData.time
    );

    if (sameUserDuplicate) {
      alert(
        `You have already booked an appointment on ${formData.date} at ${formData.time}.`
      );
      return;
    }

    existingBookings.push(formData);
    localStorage.setItem(
      `bookings_${user.email}`,
      JSON.stringify(existingBookings)
    );

    setIsBooked(true);
  };

  if (isBooked) {
    return (
      <div className="appointment-container text-center">
        <h2 className="text-success mb-3">Appointment Booked Successfully ✅</h2>
        <div className="appointment-card">
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

          <div className="btn-group">
            <button
              className="btn btn-danger"
              onClick={() => {
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
                setDateTimeTaken(false);
              }}
            >
              ↩️ Book Another Appointment
            </button>

            <button className="btn btn-dark" onClick={() => navigate("/summary")}>
              View Summary
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="appointment-bg">
      <div className="appointment-form-container">
        <h2 className="text-center mb-4">Grace & Gloss - Book Appointment</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            className="form-control mb-3"
            placeholder="Your Name"
            value={formData.name}
            readOnly
          />
          <input
            name="email"
            className="form-control mb-3"
            placeholder="Your Email"
            value={formData.email}
            readOnly
          />
            <input
            name="phone"
            className="form-control mb-1"
            placeholder="WhatsApp Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {phoneError && <p className="text-danger mb-2">{phoneError}</p>}

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
            className="form-control mb-1"
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

          {dateTimeTaken && (
            <p className="date-warning">
              ⚠️ This date & time slot is already booked. Please choose another.
            </p>
          )}

          <button className="bookbtn w-100">Book Now</button>
        </form>
        <p className="mt-3">
          👈 <Link to="/" className="text-danger fw-500">Back to Home</Link>
        </p>
      </div>
    </div>
  );
}

export default AppointmentForm;
