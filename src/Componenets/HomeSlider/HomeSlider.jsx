import React from 'react';
import Slider from 'react-slick';
import banner from '../../Assets/banner-image.png';
import single from '../../Assets/single-image1.png';
import { useNavigate } from 'react-router-dom';

export default function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const navigate = useNavigate();

  const handleShopProductClick = () => {
    navigate('/products'); // Adjust the path as necessary to match your route for the Products component
  };

  return (
    <div className="w-full bg-[#D7DDDF]">
      <Slider {...settings}>
        <div className="h-screen flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center w-full text-center">
            <div className="md:w-1/2 p-4">
              <div className="banner-content">
                <h1 className="text-4xl md:text-6xl font-bold text-dark uppercase pb-5">
                  Your Products Are Great.
                </h1>
                <button
                  onClick={handleShopProductClick}
                  className="btn btn-large btn-dark text-uppercase btn-rounded-none"
                >
                  Shop Product
                </button>
              </div>
            </div>
            <div className="md:w-1/2 p-4">
              <div className="image-holder">
                <img src={banner} className="w-full h-full object-cover" alt="banner" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center w-full text-center">
            <div className="md:w-1/2 p-4">
              <div className="banner-content">
                <h1 className="text-4xl md:text-6xl font-bold text-dark uppercase pb-5">
                  Your Products Are Great.
                </h1>
                <button
                  onClick={handleShopProductClick}
                  className="btn btn-large btn-dark text-uppercase btn-rounded-none"
                >
                  Shop Product
                </button>
              </div>
            </div>
            <div className="md:w-1/2 p-4">
              <div className="image-holder">
                <img src={single} className="w-full h-full object-cover" alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
