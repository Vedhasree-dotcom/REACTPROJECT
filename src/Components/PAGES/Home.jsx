import React from "react";
import PopupLoginReminder from "./PopupLoginReminder";
import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import salon from "../../assets/salon.png";
import girl from "../../assets/girl.png";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";


function Home() {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userDetails"));
    if (!user) {
      setShowPopup(true);
    }
  }, []);

  return (<>
  
       {showPopup && <PopupLoginReminder />}

      <div className={`home mt-3 ${showPopup ? "blurred" : ""}`}>
       <h2 className='text-overlay'>Your Perfect Beauty Partner</h2>
      <div className='image-container'>
      <img src="https://images.pexels.com/photos/15026763/pexels-photo-15026763.jpeg" className="image" alt="salon" />
    </div>
    </div>

    <div className='Grid'>
      <div className='image-grid'>
        <img src="https://images.pexels.com/photos/19664877/pexels-photo-19664877.jpeg" alt="" />
      </div>
      <div className='content'>
        <h3>ABOUT US</h3>
        <p>At Grace & Gloss Salon, we believe beauty is more than just appearance — it’s an expression of confidence, 
          care, and individuality. Nestled in a serene and stylish space, our salon offers a perfect blend of luxury and comfort, designed to make you feel pampered from the moment you step in.
          Our team of skilled professionals brings expertise, creativity, and passion to every service, whether it’s a refreshing hair spa, a soothing facial,
          a flawless manicure, or a complete makeover. We use high-quality, trusted products to ensure your hair, skin, and nails get the gentle care they deserve.
          At Grace & Gloss, we don’t just enhance your outer beauty we help you rediscover your inner glow. Every detail, every touch, 
          and every style is crafted to reflect your unique grace and shine with timeless gloss. Come, relax, and let us turn your beauty moments into a truly graceful experience.
          Our talented team of beauty professionals stays updated with the latest trends and techniques to ensure you receive nothing less than excellence. 
          We believe that beauty should be effortless yet empowering. That’s why we use only premium, dermatologist-approved products that nourish your skin and hair from within.
          We use premium-quality, skin-friendly products that nurture your natural beauty while adding that signature.<br/><br/>
          <b style={{fontSize: "17px", color: "brown"}}> Come indulge in the art of beauty and grace, because you deserve to shine with timeless gloss every day !</b>
          </p>
          <Link className='read text-decoration-none ' to='/about'>Read More</Link>
      </div>
    </div>
    <img src={salon} alt=" " style={{ width: "80%", height: "auto", margin: "20px 130px", objectFit:'contain' }}/><br/>


    <Carousel className='carousels mt-5 ms-5 me-5'>
      <Carousel.Item interval={1000} className='carousel-item'>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/7755474/pexels-photo-7755474.jpeg" 
          alt="First slide"
        />
        <Carousel.Caption className=' carousel-caption'>
          <h3>Refresh. Revive. Radiate</h3>
          <p>Let your hair breathe in luxury with our soothing wash ritual.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}  className='carousel-item'>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/11441410/pexels-photo-11441410.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h3>Glow that speaks volumes</h3>
          <p>Indulge in a rejuvenating facial and unveil your natural radiance</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item  className='carousel-item'>
        <img
          className=" w-100"
          src="https://images.pexels.com/photos/332046/pexels-photo-332046.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h3>Chic fingertips, graceful you</h3>
          <p>Perfectly polished nails for that flawless, confident finish</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel><br/>

   <div className="banner-container mt-4">
    <div className='banner-text'>
    <h1>Contact Us</h1>
    <h5>Have Questions? We are always thrilled to hear from you!</h5>
    <p>Come visit us or contact us @ 9778548096 for all your queries. Or you can just fill out the<br/> online booking and enquiry form,
       and we will get back to you as soon as we can.</p>

    <p style={{marginTop:"50px"}}><Link className='booking text-decoration-none mt-5 fw-bold' to='/book'
    style={{backgroundColor: "rgb(226, 91, 114)",color: "white", padding: "15px 30px", borderRadius: "40px" }}
    
    >Book Appointment</Link></p>
    </div>
    <img src={girl} className='girl-image' alt="" />
    </div>


    <div className='title'>
    <h4>Transforming Lives</h4>
      <h2>Our Client Says</h2>
    </div>

     <div className="review">
      <div className="overlay"></div> 

      <Carousel fade interval={3000}>
        <Carousel.Item className='review-carousel'>
          <div className="review-item">
            <p style={{marginTop: "40px", fontSize: "20px", textAlign: "justify", fontWeight: "600"}}>
              <i className="fa-solid fa-quote-left" style={{fontSize:"60px"}}></i> <br/>
              When I went to visit the salon for my bridal make up I was a
              little worried as I had scars on my face. But the expert Suman
              assured me about the quality of products and I absolutely loved
              the end result.<br/> <i className="fa-solid fa-quote-right" style={{fontSize:"60px", marginLeft:"600px"}}></i>
            </p>
            <img src={pic1} alt="client1" />
            <h3 className="testimonial-name">Nimisha Anna Boban</h3>
            <p className="testimonial-place">KOCHI</p>
          </div>
        </Carousel.Item>

        <Carousel.Item className='review-carousel'>
          <div className="review-item">
            <p style={{marginTop: "40px", fontSize: "20px", textAlign: "justify", fontWeight: "600"}}>
              <i className="fa-solid fa-quote-left" style={{fontSize:"60px"}}></i> <br/>
              When I went to visit the salon for my bridal make up I was a
              little worried as I had scars on my face. the experts fix it very nicely. 
              <br/> <i className="fa-solid fa-quote-right" style={{fontSize:"60px", marginLeft:"600px"}}></i>
            </p>
            <img src={pic2} alt="client2" />
            <h3 className="testimonial-name">Sneha Kumar</h3>
            <p className="testimonial-place">KOZHIKODE</p>
          </div>
        </Carousel.Item>

        <Carousel.Item className='review-carousel'>
          <div className="review-item">
            <p style={{marginTop: "40px", fontSize: "20px", textAlign: "justify", fontWeight: "600"}}>
              <i className="fa-solid fa-quote-left" style={{fontSize:"60px"}}></i> <br/>
              When I went to visit the salon for my bridal make up I was a
              little worried as I had scars on my face. But the expert Suman
              assured me about the quality of products and I absolutely loved
              the end result.<br/> <i className="fa-solid fa-quote-right" style={{fontSize:"60px", marginLeft:"600px"}}></i>
            </p>
            <img src={pic2} alt="client3" />
            <h3 className="testimonial-name">Aishwarya Raj</h3>
            <p className="testimonial-place">KOTTAYAM</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
 






  



</>
  );
}

export default Home;
