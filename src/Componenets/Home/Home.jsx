import React from "react";
import style from "../Home/Home.module.css";
import image from "../../Assets/accessc.png";
import Bestseller from "../bestseller/Bestseller";
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import HomeSlider from "../HomeSlider/HomeSlider";
import Products from "../products/products";
import HeaderCategory from "../HeaderCategory/HeaderCategory";
import Exclusive from "../exclusive/Exclusive";
import Offres from "../offres/Offres";

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
      <HeaderCategory/>
       {/*<div className={`${style.cover}`}>
        <img src={image} alt="Cover" />
      </div> */}

      <div className={`${style.shapeContainer}`}>
        <div className={style.Rectangle}></div>
        <h6 className={style.title}>This Month</h6>
      </div>

      <div className={`${style.shapeContainer}`}>
      <div className={style.Rectangle}></div>
      <div className={`${style.bestSellingProductsContainer} w-full mb-8`}>
        <h3>Best Selling Products</h3>
      </div>
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

      <div className={`${style.shapeContainer} mt-16`}>
        <div className={style.Rectangle}></div>
        <h6 className={style.title}>This week</h6>
      </div>

      <div className={`${style.bestSellingProductsContainer} w-full mb-8`}>
        <h3> Our Exclusive Products </h3>
      </div>

      <div>
        <Exclusive/>
      </div>




      <div className={`${style.shapeContainer} mt-16`}>
        <div className={style.Rectangle}></div>
        <h6 className={style.title}>This week</h6>
      </div>

      <div className={`${style.bestSellingProductsContainer} w-full mb-8`}>
        <h3> Our Offres Products </h3>
      </div>

      <div>
        <Offres/>
      </div>


    </div>
  );
}
