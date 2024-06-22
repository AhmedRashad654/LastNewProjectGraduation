import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useNavigate, useParams } from "react-router-dom";
import style from "./details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { request, url } from "../../axios/axios";
import Loading from "../../ui/Loading";
import { handleAddWishLish, removeFromWishList } from "../../api/api";
import { setWishList } from "../../slice/slice";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Button } from "react-bootstrap";
function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [detailsprd, setdetailprd] = useState(null);
  const navigate = useNavigate();
  const favoriteProducts = useSelector(
    (state) => state.favoriteproducts.products
  );
  useEffect(() => {
    request.get(`/products/single/${id}`).then((res) => {
      setdetailprd(res?.data?.data[0]);
    });
  }, [id]);
  /////////////add wish list///////////
  async function addWishLish(id) {
    const result = await handleAddWishLish(id);
    dispatch(setWishList(result?.data?.data?.products));
  }
  /////////////remove wish list////////
  async function handleRemove() {
    const result = await removeFromWishList( detailsprd?._id );
    if ( result ) {
       dispatch(setWishList(result?.data?.data?.products));
    }
   
  }
  /////////slider///////
  const settings = {
    dots: false,
    infinite: detailsprd?.images.length > 1 ? true : false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
  };
  ////////////////////////
  const { getItemsQuantity, increaseQuantity, decreaseQuantity, removeItem } =
    useShoppingCart();
  const quantity = getItemsQuantity(detailsprd?._id);
  //////fgg////////
  const [hoverProduct, setHoverProduct] = useState();
  const handleMouseOver = (productId) => {
    setHoverProduct(productId);
  };

  const handleMouseOut = () => {
    setHoverProduct(null);
  };
  return (
    <>
      {detailsprd ? (
        <div
          className={style.parentdiv}
          onMouseOver={() => handleMouseOver(detailsprd._id)}
          onMouseOut={handleMouseOut}
        >
          <div className={style.childone}>
            <Slider {...settings}>
              {detailsprd?.images?.map((e, i) => (
                <div key={i}>
                  <img
                    src={`${url}/img/${e}`}
                    className="w-100"
                    alt={detailsprd.name}
                  />
                  {quantity === 0 ? (
                    <Button
                      onClick={() => {
                        if (localStorage.getItem("token")) {
                          increaseQuantity(detailsprd);
                        } else {
                          navigate("/login");
                        }
                      }}
                      className={`btn btn-dark w-100 showbutton ${
                        hoverProduct === detailsprd._id ? "d-block" : "d-none"
                      }`}
                    >
                      Add to Cart
                    </Button>
                  ) : (
                    <div
                      className={`w-100 ${
                        hoverProduct === detailsprd._id ? "d-block" : "d-none"
                      }`}
                    >
                      <div className="d-flex align-items-center justify-content-center">
                        <Button
                          onClick={() => increaseQuantity(detailsprd)}
                          size="sm"
                        >
                          +
                        </Button>
                        <span>{quantity} in cart</span>
                        <Button
                          onClick={() => decreaseQuantity(detailsprd)}
                          size="sm"
                        >
                          -
                        </Button>
                      </div>
                      <Button
                        onClick={() => removeItem(detailsprd)}
                        variant="danger"
                        className="mt-2"
                      >
                        Remove
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </div>
          <div className={style.childttwo}>
            <h1>{detailsprd?.name}</h1>
            <p>{detailsprd?.description}</p>
            <p>${detailsprd?.price}</p>
            <hr></hr>
            <div className="d-flex justify-content-center  ">
              <button className={`btn-icon ${style.favProduct}`}>
                {favoriteProducts.find((e) => e?._id === detailsprd?._id) ? (
                  <i
                    className="fa-solid fa-heart iconwishfavourit  p-2"
                    onClick={handleRemove}
                  ></i>
                ) : (
                  <i
                    className="fa-regular fa-heart iconwish p-2"
                    onClick={() => {
                      if (localStorage.getItem("token")) {
                        addWishLish(detailsprd?._id);
                      } else {
                        navigate("/login");
                      }
                    }}
                  ></i>
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Details;
