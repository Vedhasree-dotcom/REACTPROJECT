import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="text-center text-lg-start mt-5 text-dark position-absolute ZIndex-4"
      style={{ backgroundColor: "#ffe6f0",width: "100%" }}>

      <div className="container-fluid">
        <div className="row text-center text-md-start">

          <div
            className="col-md-3 mb-4"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              padding: "40px",
            }}
          >
            <h5 className="fw-bold mb-3" style={{fontSize: "30px", color: "rgb(226, 91, 114)"}}>Grace & Gloss</h5>
            <p style={{ color: "#555"}}>
              At Grace & Gloss, we offer you the best-in-class services to meet your everyday beauty needs as well as for special occasions.
              You can choose from our range of hair, skin, nails, makeover and bridal services.<br></br>
              <b>Experience the art of beauty and self-care in every visit!</b> 
            </p>
          </div>

          <div
            className="col-md-3 mb-4"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              padding: "40px",
            }}
          >
            <h5 className="fw-bold mb-3 text-dark">Quick Links</h5>
            <p><Link to="/" className="text-dark text-decoration-none"> Home</Link></p>
            <p><Link to="/about" className="text-dark text-decoration-none"> About</Link></p>
            <p><Link to="/services" className="text-dark text-decoration-none"> Services</Link></p>
            <p><Link to="/book" className="text-dark text-decoration-none"> Book Appointment</Link></p>
            <p><Link to="/contact" className="text-dark text-decoration-none"> Contact Us</Link></p>
          </div>

          <div
            className="col-md-3 mb-4"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              padding: "40px",
            }}
          >
            <h5 className="fw-bold mb-3 text-dark">Contact Us</h5>
            <Link className="text-dark text-decoration-none" to='/contact'>C K Tower 3rd floor, Mavoor Road, <br/> Calicut - Kerala <br/> pin: 673001</Link> <hr />
            <p> graceandgloss@gmail.com</p>
            <p> +91 98765 43210, +91 9778548096</p>
            <p> Opens: 9:00 AM – 8:00 PM</p>
          </div>

          <div
            className="col-md-3 mb-4"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              padding: "40px",
            }}
          >
            <h5 className="fw-bold mb-3 text-dark">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-dark">
                <FaInstagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-dark">
                <FaFacebookF size={24} />
              </a>
              <a href="https://wa.me/919778548096" target="_blank" rel="noreferrer" className="text-dark">
                <FaWhatsapp size={24} />
              </a>
            </div>
            <p className="mt-3" style={{ color: "#555" }}>
              Stay connected with us for the latest trends 
            </p>
          </div>

        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgb(226, 91, 114)", color: "white", borderTop: "1px solid #fff" }}
      >
        © {new Date().getFullYear()} <b>Grace & Gloss</b> | All Rights Reserved 
      </div>
    </footer>
  );
}

export default Footer;
