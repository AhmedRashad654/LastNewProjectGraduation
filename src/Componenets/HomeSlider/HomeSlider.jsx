import React from 'react';
import Slider from 'react-slick';
import slide1 from '../../Assets/wat.jpg';
import slide2 from '../../Assets/j.jpg';
import slide3 from '../../Assets/ADV.jpg';
import c1 from '../../Assets/MAC.jpg';
import c2 from '../../Assets/bag.jpg';

export default function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='row'>
      <div className='col-md-8 p-10'>
        <Slider {...settings}>
          <div>
            <img src={slide1} className='w-100' height={1000} alt="Slide 1" />
          </div>
          <div>
            <img src={slide2} className='w-100' height={1000} alt="Slide 2" />
          </div>
          <div>
            <img src={slide3} className='w-100' height={1000} alt="Slide 3" />
          </div>
        </Slider>
      </div>
      <div className='col-md-4'>
        <img src={c1} className='w-100' height={250} alt="Category 1" />
        <img src={c2} className='w-100' height={250} alt="Category 2" />
      </div>
    </div>
  );
}
