import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";  


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg pt-3 pb-3">
      <Link className="navbar-brand ms-5 text-light fw-bold" to="/" style={{fontSize: "25px"}}>Grace & Gloss</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link text-light fw-bold" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link text-light fw-bold" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link text-light fw-bold" to="/services">Services</Link></li>
          <li className="nav-item"><Link className="nav-link text-light fw-bold" to="/contact">Contact</Link></li>
          <li className="nav-item" 
           style={{color: "white", 
           fontWeight: "bold", marginLeft: "30px",
            borderRadius: "20px", padding: "0 10px" }}>
            <Link className="nav-link text-light fw-bold" to="/book">Book Appointment</Link></li>

            <nav>
              <Link className='btn btn-light text-dark' to="/login"
              style={{marginLeft: "180px"}} > Login</Link>

              <Link to="/profile" className="text-white text-decoration-none ms-4">
              <FaUserCircle size={28} />
              </Link>
            </nav>


        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
