import React from 'react';
import style from '../Home/Home.module.css';
import iphones from '../../Assets/without.png';
import Laptops from '../../Assets/Lptops without.png';
import Accessories from '../../Assets/accessories.png';
import image from '../../Assets/EditPH.png';
import Bestseller from '../bestseller/Bestseller';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import HomeSlider from '../HomeSlider/HomeSlider';
import Products from '../products/products';

export default function Home() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios.get('https://api.escuelajs.co/api/v1/products')
  //     .then(res => {
  //       setProducts(res.data);
  //     });
  // }, []);

  return (
    <div>
      <div className={`${style.imageContainer} w-full flex justify-around items-center mb-8`}>
        <div>
          <img src={iphones} alt="iphones category" className={style['small-rounded-img']} />
          <h6 className="text-green-500 font-bold text-lg">Iphones</h6>
        </div>
        <div>
          <img src={Laptops} alt="Laptops category" className={style['small-rounded-img']} />
          <h6 className="text-green-500 font-bold text-lg">Laptops</h6>
        </div>
        <div>
          <img src={Accessories} alt="Electronic Accessories category" className={style['small-rounded-img']} />
          <h6 className="text-green-500 font-bold text-lg">Electronic Accessories</h6>
        </div>
      </div>
      <div className={`${style.cover}`}>
        <img src={image} alt="Cover" />
      </div>

      <div className={`${style.shapeContainer}`}>
        <div className={style.Rectangle}></div>
        <h6 className={style.title}>This Month</h6>
      </div>

      <div className={`${style.bestSellingProductsContainer} w-full mb-8`}>
        <h3>Best Selling Products</h3>
      </div>

      <Bestseller />
      <HomeSlider />

      <div className={`${style.shapeContainer}`}>
        <div className={style.Rectangle}></div>
        <h6 className={style.title}>This Month</h6>
      </div>

      <div>
        <Products />
      </div>
    </div>
  );
}


