import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error loading services:", err));
  }, []);

  return (
    <div className="services-page">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-row">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <Link to={`/services/${service.link}`} className="service-link">
                <img
                  src={service.image}
                  alt={service.name}
                  className="service-img"
                />
                <div className="service-body">
                  <h5>{service.name}</h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
