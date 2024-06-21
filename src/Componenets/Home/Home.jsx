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
      <div className={`${style.imageContainer} w-full flex justify-around items-center mb-8 flex-wrap space-x-5 space-y-5`}>
        <div>
          <img
            src={iphones}
            alt="iphones category"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full p-2.5 bg-gray-100 border-3 border-green-500 hover:rounded-lg transition-all duration-500 ease-in-out"
          />
          <h6 className="text-green-500 font-bold text-base sm:text-lg text-center">Iphones</h6>
        </div>
        <div>
          <img
            src={Laptops}
            alt="Laptops category"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full p-2.5 bg-gray-100 border-3 border-green-500 hover:rounded-lg transition-all duration-500 ease-in-out"
          />
          <h6 className="text-green-500 font-bold text-base sm:text-lg text-center">Laptops</h6>
        </div>
        <div>
          <img
            src={Accessories}
            alt="Electronic Accessories category"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full p-2.5 bg-gray-10 border-3 border-green-500 hover:rounded-lg transition-all duration-500 ease-in-out"
          />
          <h6 className="text-green-500 font-bold text-base sm:text-lg text-center">Electronic Accessories</h6>
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

      <div className={`${style.bestSellingProductsContainer} w-full mb-8`}>
        <h3> Products</h3>
      </div>

      <div>
        <Products />
      </div>
    </div>
  );
}




