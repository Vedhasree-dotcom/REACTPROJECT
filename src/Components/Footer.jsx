import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-dark mt-5"
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
            <h5 className="fw-bold mb-3 text-dark">Grace & Gloss</h5>
            <p style={{ color: "#555" }}>
              Where elegance meets perfection.  
              Experience the art of beauty and self-care in every visit! <br></br><br></br>

              Change your style with Us.
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

      {/* Bottom Bar */}
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
