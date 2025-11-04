import React from 'react'
import { FaPhone, FaLocationDot, FaClock } from "react-icons/fa6";
import contactImg from '../../assets/contactImg.jpg';


function Contact() {
  return (
    <div className='contact'>
      <div className='img-banner'>
      <img src="" alt="" />
      </div>

      <div className='child'>
        <img src="https://cucumbabeautysalon.com/wp-content/themes/cucumba/assets/images/leart.svg" className="h-50" alt="" />
        <h1>Keep In Touch With Us</h1>
        <p>Feel free to contact us for an appointment or to get your
            queries answered.</p>
        <div className="icons">
          <div className="icon">
             <FaLocationDot className='place' size={26}/>
             <h5>Head Office</h5>
             <p>C K Tower 3rd floor - Kozhikode, <br/>
             Mavoor road Junction Calicut, Kerala 673001</p>
          </div>
          <div className="icon">
             <FaPhone className='phone' size={26}/>
             <h5>Contact</h5>
             <p>Mobile: +91 9778548096, +91 9497832701</p>
             <p>E-mail: graceandgloass@gmail.com</p>
          </div>
          <div className="icon">
            <FaClock size={26}/>
            <h5>Hour of Operation</h5>
            <p>Monday - Saturday: 10:00am - 8:00pm</p>
            <p>Sunday: 10:00am – 5:00pm</p>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <div>
          <img src={contactImg} alt="" />
        </div>
        <div>
          <h4>Drop us a line</h4>
          <p>Please complete the short form below and we’ll respond as soon as possible. </p>

          <form>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email Id' />
            <input type="number" placeholder='Mobile Number'/>
            <input type="text" placeholder='Location' />
            <textarea name="message" id="" placeholder='message' />
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact