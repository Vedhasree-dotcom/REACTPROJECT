import React, { useState } from 'react';

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    date: '',
    time: ''
  });

  const [isBooked, setIsBooked] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.location || !formData.service || !formData.date || !formData.time) {
      alert("Please fill all fields!");
      return;
    }

    // store booking
    localStorage.setItem("bookingDetails", JSON.stringify(formData));

    setIsBooked(true);
  };

  if (isBooked) {
    return (
      <div className="container text-center mt-5">
        <h2 className="text-success mb-3">Appointment Booked Successfully 💅</h2>
        <div className="card shadow p-4" style={{ borderRadius: "20px", backgroundColor: "#fff0f5" }}>
          <p><b>Name:</b> {formData.name}</p>
          <p><b>Email:</b> {formData.email}</p>
          <p><b>Phone:</b> {formData.phone}</p>
          <p><b>Location:</b> {formData.location}</p>
          <p><b>Service:</b> {formData.service}</p>
          <p><b>Date:</b> {formData.date}</p>
          <p><b>Time:</b> {formData.time}</p>
          <p className="text-success fw-bold mt-2">See you soon at Grace & Gloss 💖</p>


          <button
            className="btn mt-3"
            style={{ backgroundColor: "pink", color: "white" }}
            onClick={() => setIsBooked(false)} // go back to form
          >
            ↩️ Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Grace & Gloss - Book Appointment</h2>
      <form className="w-75 mx-auto" onSubmit={handleSubmit}>
        <input name="name" className="form-control mb-3" placeholder="Your Name" onChange={handleChange} />
        <input name="email" className="form-control mb-3" placeholder="Your Email" onChange={handleChange} />
        <input name="phone" className="form-control mb-3" placeholder="Your Phone Number" onChange={handleChange} />
        <input name="location" className="form-control mb-3" placeholder="Your Location" onChange={handleChange} />

        <select name="service" className="form-control mb-3" onChange={handleChange}>
          <option value="">Select Service</option>
          <option>Hair Styling</option>
          <option>Facial</option>
          <option>Manicure</option>
          <option>Pedicure</option>
          <option>Bridal Makeup</option>
        </select>

        <input type="date" name="date" className="form-control mb-3" onChange={handleChange} />
        <input type="time" name="time" className="form-control mb-3" onChange={handleChange} />

        <button className="btn w-100" style={{ backgroundColor: "pink", color: "white" }}>
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;
