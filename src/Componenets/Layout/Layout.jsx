import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { setWishList } from "../../slice/slice";
import { useDispatch } from "react-redux";
import { getAllWishList } from "../../api/api";

export default function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getAllList() {
      const result = await getAllWishList();
      dispatch(setWishList(result?.data?.data?.products));
    }
    if (localStorage.getItem("token")) {
      getAllList();
    }
  }, [dispatch]);

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
