import React, { useState, useEffect } from 'react';
import style from '../Home/Home.module.css';
import iphones from '../../Assets/without.png';
import Laptops from '../../Assets/Lptops without.png';
import Acessories from '../../Assets/accessories.png';
import Slider from 'react-slick';
import slide1 from '../../Assets/iphoneslide.jpg';
import slide2 from '../../Assets/iphoneslide.jpg';
import slide3 from '../../Assets/iphoneslide.jpg';
import Bestseller from '../bestseller/Bestseller';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [sliderImages, setSliderImages] = useState([slide1, slide2, slide3]);
  const [showAll, setShowAll] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(res => {
        setProducts(res.data);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handleViewAll = () => {
    setShowAll(true);
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

      <div className={style.shapeContainer}>
  <div className={style.Rectangle}></div>
  <h6 className={style.title}>This Month</h6>
</div>


      <div className={style.bestSellingProductsContainer}>
        <h3>Best Selling Products</h3>
        <div>
          <button className='btn btn-danger' onClick={handleViewAll}>View All</button>
        </div>
      </div>

      {showAll && (
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products.map((product) => (
            <div key={product.id}>
              <div className="col">
                <div className="card no-border">
                  <div className='Postion'>
                    <img src={product.images} className="card-img-top" alt={product.title} />
                    <div className='icons'>
                      <Link to={`/whislist`}>
                        <i className="fa-regular fa-heart iconwish"></i>
                      </Link>
                      <Link to={`/details/${product.id}`}>
                        <i className="fa-regular fa-eye icondetails"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p>{product.price}</p>
                    <Link to={`/cart`} className={`btn btn-dark w-100 showbutton`}>
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Bestseller />
    </div>
  );
}


