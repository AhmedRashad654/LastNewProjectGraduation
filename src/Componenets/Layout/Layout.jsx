import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useQuery } from "react-query";
import { request } from "../../axios/axios";
import { setWishList } from "../../slice/slice";
import { useDispatch} from "react-redux";

export default function Layout() {
    const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
  ///////////get All WishList//////////
  function getAllWishList() {
    return request.get(`/wishList/${user?._id}`);
  }
  const { data } = useQuery("getAllWishLish", getAllWishList);
  useEffect(() => {
    if (data) {
      dispatch(setWishList(data?.data?.data?.products));
    }
  }, [ data, dispatch ] );

  
  return (
    <>
      <Navbar />

      <div className="containe min-h-[62vh]">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
