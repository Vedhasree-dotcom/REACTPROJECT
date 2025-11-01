import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


function Home() {
  return (<>
    <div className="home mt-3">
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
          <Link className='read text-decoration-none mt-3' to='/about'>Read More</Link>
      </div>
    </div>

    <Carousel className='carousels mt-5 ms-4 me-4'>
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

      <Carousel.Item interval={500}  className='carousel-item'>
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
    </Carousel>
  



</>
  );
}

export default Home;
