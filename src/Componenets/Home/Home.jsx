import React, { useState } from 'react';
import style from '../Home/Home.module.css';
import iphones from '../../Assets/without.png';
import Laptops from '../../Assets/Lptops without.png';
import Acessories from '../../Assets/accessories.png';
import Slider from 'react-slick';
import slide1 from '../../Assets/iphoneslide.jpg';
import slide2 from '../../Assets/iphoneslide.jpg';
import slide3 from '../../Assets/iphoneslide.jpg';

export default function Home() {
  const [sliderImages, setSliderImages] = useState([slide1, slide2, slide3]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <div className={style.imageContainer}>
        <div>
          <img
            src={iphones}
            alt="iphones category"
            className={style['small-rounded-img']}
          />
          <h6>Iphones</h6>
        </div>
        <div>
          <img
            src={Laptops}
            alt="Laptops category"
            className={style['small-rounded-img']}
          />
          <h6>Laptops</h6>
        </div>
        <div>
          <img
            src={Acessories}
            alt="Electronic Accessories category"
            className={style['small-rounded-img']}
          />
          <h6>Electronic Accessories</h6>
        </div>
      </div>

      <div className={style.sliderContainer}>
        <div className={style.sliderWrapper}>
          <Slider {...settings}>
            {sliderImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} className={style['slider-img']} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
