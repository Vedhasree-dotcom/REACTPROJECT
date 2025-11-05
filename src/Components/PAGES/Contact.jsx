import React, { useState } from "react";
import { FaPhone, FaLocationDot, FaClock } from "react-icons/fa6";
import contactImg from "../../assets/contactImg.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // ✅ Regex validation
  const validate = () => {
    const newErrors = {};
    if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Enter a valid name (letters only)";
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }
    if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="contact">
      <div className="child">
        <img
          src="https://cucumbabeautysalon.com/wp-content/themes/cucumba/assets/images/leart.svg"
          alt=""
        />
        <h1>Keep In Touch With Us</h1>
        <p>Feel free to contact us for an appointment or to get your queries answered.</p>

        <div className="icons">
          <div className="icon">
            <FaLocationDot className="place text-light" size={60} />
            <h5>Head Office</h5>
            <p>
              C K Tower 3rd floor - Kozhikode, <br />
              Mavoor road Junction Calicut, Kerala 673001
            </p>
          </div>
          <div className="icon">
            <FaPhone className="phone text-light" size={58} />
            <h5>Contact</h5>
            <p>Mobile: +91 9778548096, +91 9497832701</p>
            <p>E-mail: graceandgloss@gmail.com</p>
          </div>
          <div className="icon">
            <FaClock className="clock text-light" size={55} />
            <h5>Hour of Operation</h5>
            <p>Monday - Saturday: 10:00am - 8:00pm</p>
            <p>Sunday: 10:00am – 5:00pm</p>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <div>
          <img src={contactImg} alt="Contact" />
        </div>

        <div className="fill">
          <h4>Drop us a line</h4>
          <p>Please complete the short form below and we’ll respond as soon as possible.</p>

          <form className="FORM" onSubmit={handleSubmit}>
            <div className="field">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <small className="error">{errors.name}</small>}
            </div>

            <div className="field">
              <input
                type="email"
                name="email"
                placeholder="Email Id"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <small className="error">{errors.email}</small>}
            </div>

            <div className="field">
              <input
                type="number"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <small className="error">{errors.phone}</small>}
            </div>

            <div className="field">
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className="field textarea-field">
              <textarea
                name="message"
                placeholder="Message"
                rows= "6"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <small className="error">{errors.message}</small>}
            </div>

            <button type="submit" className="msg-btn mt- me-5">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
