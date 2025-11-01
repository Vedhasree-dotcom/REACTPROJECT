import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (<>
    <div className="home mt-3">
       <h2 className='text-overlay'>Your Perfect Beauty Partner</h2>
      <div className='image-container'>
      <img src="https://images.pexels.com/photos/15026763/pexels-photo-15026763.jpeg" className="image" alt="salon" />
    </div>
    </div>

    <Carousel className='carousels mt-4 ms-3 me-3'>
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
