import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";  

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg position-fixed pt-3 pb-3">
        <div className="d-flex align-items-center">
          <button 
            className="navbar-toggler d-lg-none" 
            type="button"
            onClick={toggleSidebar}
            style={{
              border: 'none',
              background: 'transparent',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
              marginRight: '15px'
            }}
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          <Link className="navbar-brand text-light fw-bold ms-4" to="/" style={{fontSize: "25px"}}>Grace & Gloss</Link>
        </div>
        
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

      <div className={`mobile-sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <button className="sidebar-close" onClick={closeSidebar}>
              <FaTimes />
            </button>
          </div>
          <ul className="sidebar-nav">
            <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
            <li><Link to="/about" onClick={closeSidebar}>About</Link></li>
            <li><Link to="/services" onClick={closeSidebar}>Services</Link></li>
            <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
            <li><Link to="/book" onClick={closeSidebar}>Book Appointment</Link></li>
            <li><Link to="/login" onClick={closeSidebar}>Login</Link></li>
            <li><Link to="/profile" onClick={closeSidebar}>Profile</Link></li>
          </ul>
        </div>

        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      </div>
    </>
  );
}

export default Navbar;