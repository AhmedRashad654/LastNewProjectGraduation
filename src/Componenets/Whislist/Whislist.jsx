import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWishList } from "../../slice/slice";
import style from "./whislist.module.css";
import {  url } from "../../axios/axios";
import { removeFromWishList } from "../../api/api";
import empty from '../../Assets/dribble_shot_62_4x.jpg'

export default function Whislist() {
  const favoriteProducts = useSelector(
    (state) => state.favoriteproducts.products
  );

  const dispatch = useDispatch();

  ////////////remove wish list///////////////////////
  async function handleRemove(id) {
    const result = await removeFromWishList( id );
    if ( result ) {
       dispatch(setWishList(result?.data?.data?.products));
    }
   
  }
  if ( !favoriteProducts?.length ) return (
    <div className="flex justify-center items-center w-full h-full">
      <img src={empty} className="max-w-lg" alt="emty" />
    </div>
  ); 
  return (
    <div className="my-1">
      <h4 className="my-3 font-bold">Your Wish List</h4>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(0,_250px))]  gap-4">
        {favoriteProducts && favoriteProducts?.length > 0 &&
          favoriteProducts?.map((product) => (
            <div
              className={` mb-4 ${style.parent}`}
              key={product._id}
              style={{ marginLeft: "10px" }}
            >
              <div className="card no-border">
                <img
                  src={`${url}/img/${product.image}`}
                  className=""
                  alt={product.name}
                />
                <h3 className="card-title">{product?.name}</h3>
                <h4 className="card-title">{product?.price}</h4>
              </div>
              <button
                className={`btn btn-light ${style.button} `}
                onClick={() => handleRemove(product?._id)}
              >
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
