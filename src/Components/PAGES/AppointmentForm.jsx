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
  const [dateTaken, setDateTaken] = useState(false); 
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

  const checkDateAvailability = (selectedDate) => {
    const allBookings = Object.keys(localStorage)
      .filter((key) => key.startsWith("booking_"))
      .map((key) => JSON.parse(localStorage.getItem(key)));

    const taken = allBookings.some(
      (b) => b.date === selectedDate && b.email !== formData.email
    );

    setDateTaken(taken);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "date") {
      checkDateAvailability(value);
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

    if (dateTaken) {
      alert(`Sorry, ${formData.date} is already booked by another user!`);
      return;
    }

    localStorage.setItem(`booking_${user.email}`, JSON.stringify(formData));
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
                setDateTaken(false);
              }}
            >
              ↩️ Book Another Appointment
            </button>

            <button
              className="btn btn-dark"
              onClick={() => navigate("/summary")}
            >
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
            className="form-control mb-1"
            value={formData.date}
            onChange={handleChange}
          />
          {dateTaken && (
            <p className="date-warning">
              ⚠️ Sorry, this date is already booked. Please choose another one.
            </p>
          )}

          <input
            type="time"
            name="time"
            className="form-control mb-3"
            value={formData.time}
            onChange={handleChange}
          />

          <button className="bookbtn w-100">
            Book Now
          </button>
        </form>
          <p className="mt-3">👈<Link to='/' className="text-danger fw-500">Back to Home</Link></p>
      </div>
    </div>
  );
}

export default AppointmentForm;
