import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {  FaUserFriends, FaHandSparkles, } from "react-icons/fa";
import { MdFaceRetouchingNatural, MdBrush } from "react-icons/md";
import { GiHairStrands } from "react-icons/gi";


import './Bridal.css';

function Bridal() {
  return (
    <div className='bridal'>
        <div className='bridal-banner'>
      <img src="https://images.pexels.com/photos/16468872/pexels-photo-16468872.jpeg" alt="" />
      <h2>Bridal</h2>
      </div>

      <div className='bridal-grid'>
        <div className="bridal-content">
        <h4>About Bridal Service</h4>
        <p>
            At Grace & Gloss Salon, we believe every bride deserves to look and feel absolutely radiant on her big day. 
            Our Bridal Beauty Experts specialize in creating stunning, customized looks that reflect your unique style, personality, and wedding theme. 
            From flawless bridal makeup to elegant hairstyles and glowing skin treatments, we make sure you walk down the aisle with confidence and grace.
            You deserve to look your best on your wedding day! We believe that a perfect look will give the bride a boost of confidence on her wedding day. 
            Being the best bridal beauty parlour in Calicut, we have a team of experienced hair and make-up artists who uphold the highest industry standards to serve you on your special day. 
            We like creating stunning, natural makeup for brides. Makeup, we feel, should complement rather than conceal your inherent beauty. This ideology has helped us excel in the beauty industry. 
            When a bride adores what we do, it is contagious, and we endeavor to offer our best to each and every bride.</p>
      </div>
        <div className="bridal-carousel">
      <Carousel className='carousel-bridal'>
      <Carousel.Item>
          <img src="https://images.pexels.com/photos/20736197/pexels-photo-20736197.jpeg" alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img src="https://images.pexels.com/photos/11474252/pexels-photo-11474252.jpeg" alt="" />
      </Carousel.Item>
      </Carousel>
      </div>
      </div>

      <div className='packages'>
        <h1>Our Bridal Packages</h1>
        <div className="makeup-grid">
            <div className="bridal-icon">
                <MdBrush className="makeup text-light" size={70} />
                 <h5>Airbrush Makeup</h5>
                 <p>
                    Experience flawless, photo-ready beauty that lasts all day. 
                    Our expert artists enhance your natural features for a radiant bridal glow on and off camera.
                </p>
                </div>
                <div className="bridal-icon">
                   < GiHairStrands className="makeup text-light" size={70} />
                      <h5>Bridal Hair Styling</h5>
                      <p>
                        From elegant traditional buns to soft modern waves, 
                        our stylists create the perfect hairstyle to complement your look and wedding attire.
                      </p>
                      </div>
                      
                      <div className="bridal-icon">
                    <MdFaceRetouchingNatural className="makeup text-light" size={70} />
                      <h5>Skin</h5>
                      <p>
                        Pamper yourself with nourishing skin and hair treatments designed to bring out your 
                        natural glow and ensure you look fresh, vibrant, and confident.
                      </p>
                      </div>
                      <div className="bridal-icon">
                    <FaHandSparkles className="makeup text-light" size={70} />
                      <h5>Nails</h5>
                      <p>
                        Add a touch of artistry to your special day with beautiful nail designs 
                        and intricate mehndi patterns that complete your bridal elegance.
                      </p>
                      </div>
                      <div className="bridal-icon">
                    <FaUserFriends className="makeup text-light" size={70} />
                      <h5>Bridesmaids makeup</h5>
                      <p>
                        Because every member of your bridal squad deserves to shine — 
                       we offer coordinated, elegant looks for bridesmaids and family too. 
                     </p>
                      </div>
                     </div>
         
      </div>




    </div>
  )
}

export default Bridal