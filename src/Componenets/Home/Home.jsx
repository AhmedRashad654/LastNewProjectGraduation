import React from "react";
import style from "../Home/Home.module.css";
import Bestseller from "../bestseller/Bestseller";
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import HomeSlider from "../HomeSlider/HomeSlider";
import Products from "../products/products";
import HeaderCategory from "../HeaderCategory/HeaderCategory";
import Exclusive from "../exclusive/Exclusive";
import Offres from "../offres/Offres";
import Services from "../services/Services";
import Counter from "../counter/Counter";
import Brands from "../brands/Brands";


export default function Home() {
  return (
    <div>
      <HomeSlider />
      <HeaderCategory />
      <div className={`${style.shapeContainer}`}>
        <div className={style.Rectangle}></div>
        <h6 className={style.title}>This Month</h6>
      </div>
      <div className={`${style.bestSellingProductsContainer} `}>
        <i class="fa-brands fa-think-peaks text-red-600 fa-2x"></i>
        <h3 className="fw-bold">Best Selling Products</h3>
      </div>

      <div className={style.bg}>
        <Bestseller />
      </div>

      <Brands></Brands>

      <div className={`${style.bestSellingProductsContainer} mt-20`}>
        <i class="fa-solid fa-square-caret-right text-red-600 fa-2x"></i>
        <h3 className="fw-bold"> Our Offres Products </h3>
      </div>

      <div className={style.bg}>
        <Offres />
      </div>

      <div>
        <Counter></Counter>
      </div>

      <div className={`${style.bestSellingProductsContainer} mt-10`}>
        <i class="fa-solid fa-cart-arrow-down text-red-600 fa-2x"></i>
        <h3 className="fw-bold"> Products</h3>
      </div>

      <div className={style.bg}>
        <Products />
      </div>

      <Services></Services>

      <div className={`${style.bestSellingProductsContainer}  mt-10`}>
        <i class="fa-brands fa-squarespace text-red-600 fa-2x "></i>
        <h3 className="fw-bold"> Our Exclusive Products </h3>
      </div>

      <div className={style.bg}>
        <h1 className={style.new}>New</h1>
        <Exclusive />
      </div>
    
    </div>
  );
}
