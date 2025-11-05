import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { FaChair, FaWifi, FaCar, FaUsers, FaBuilding} from "react-icons/fa";
import { GiHairStrands } from "react-icons/gi";  


function About() {
  return (
    <div className='about'>
      <div className='about-banner'>
      <img src="https://images.pexels.com/photos/7256137/pexels-photo-7256137.jpeg" alt="" />
      <h2>About Us</h2>
      </div>
    
      <div className='about-grid'>
        <div className="about-carousel">
      <Carousel>
      <Carousel.Item>
          <img src="https://images.pexels.com/photos/16220868/pexels-photo-16220868.jpeg" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://images.pexels.com/photos/19664877/pexels-photo-19664877.jpeg" alt="" />
        
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </div>
      <div className="about-content">
        <h4>About Us</h4>
        <h2>Enliven </h2>
        <h2>your beauty regime</h2>
        <p>At Cucumba, we strongly believe that beauty is all about confidence and self-love.  A confident skin is one that is being cared for and pampered. Cucumba hair & beauty family lounge can assist you to boost your self-confidence and help you to fall in love with yourself every day! The beauty care professionals here help to bring the best out of you. Be it a hair makeover or a pampering skincare session, we serve you the best. Our experts meticulously examine your skin and hair before recommending solutions that are right for you. We offer you the most relaxing atmosphere at our salon so that you can indulge in the experience. Simply walk into Cucumba salon and enjoy world-class beauty services.
           We offer a wide range of grooming and pampering treatments to meet all of your requirements!</p>
      </div>
      </div>

      <div className="special">
        <h4>What makes us different</h4>
        <h1>Our Speciality</h1>

        <div className="special-grid">
          <div className="special-icon">
            <FaBuilding className="place text-light" size={70} />
              <h5>4000 Sqft Family Salon</h5>
              <p>
                A unisex spacious salon to detox, rejuvenate <br/>
                 and relax your mind and body.
              </p>
              </div>
              <div className="special-icon">
            <FaChair className="place text-light" size={70} />
              <h5>VIP Lounge</h5>
              <p>
                Grace & Gloss is a posh beauty salon that exudes <br/> elegance and comfort.
              </p>
              </div>
              <div className="special-icon">
            <GiHairStrands className="place text-light" size={72} />
              <h5>Celebrity Hairstylists</h5>
              <p>
                Our beauty professionals are passionate and well-trained, and <br/> they have expertise in styling <br/> celebrities.
              </p>
              </div>
              <div className="special-icon">
            <FaWifi className="place text-light" size={70} />
              <h5>Free wifi</h5>
              <p>
                Enjoy access to free WiFi while at Grace & Gloss salon
                 and keep yourself equipped while <br/> waiting for your appointment.
              </p>
              </div>
              <div className="special-icon">
            <FaCar className="place text-light" size={70} />
              <h5>Car Parking available.</h5>
              <p>
                Get access to a free parking spot while you <br/>
                 make a visit to your nearest Grace & Gloss Salon.
              </p>
              </div>
              <div className="special-icon">
            <FaUsers className="place text-light" size={70} />
              <h5>100000 + Satisfied Customers</h5>
              <p>
                Over the past 10+ years of service,
                 our experts <br/> have made over 100000 customers happy and <br/> satisfied.
              </p>
              </div>

        </div>
      </div>

    </div>
  )
}

export default About