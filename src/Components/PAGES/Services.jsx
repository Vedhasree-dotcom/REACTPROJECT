import React from 'react';
import { services } from "../../data";    // pages/components => ../../ means

function Services() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {services.map(service => (
          <div className="col-md-4 mb-3" key={service.id}>
            <div className="card">
              <img src={service.image} className="card-img-top" alt={service.name} />
              <div className="card-body text-center">
                <h5>{service.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
