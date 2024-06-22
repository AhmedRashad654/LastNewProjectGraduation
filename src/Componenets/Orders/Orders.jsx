import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../axios/axios";

export default function Orders() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [order, setOrder] = useState([]);
  const getOrders = useCallback(async () => {
    await request.get(`/orders/user/${user._id}`).then((result) => {
      setOrder(result?.data?.data);
    });
  }, [user._id]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getOrders();
    }
  }, [getOrders]);
  if (order && order?.length === 0) {
    return <h1>No order Yet</h1>;
  }
  return (
    <div>
      <h2 className=" text-danger rounded-4 py-3 fw-bolder text-capitalize mb-4">
        my orders
      </h2>

      <div className="orders bg-light bg-opacity-25 shadow w-100 p-2 rounded-2 mt-3 mb-3">
        <div className="d-flex justify-content-around fw-bolder align-items-center">
          <p>CreatedAt</p>
          <p>totalPrice</p>
          <p>status</p>
        </div>
      </div>
      {order &&
        order.map((item) => (
          <div className="row">
            <div className="col-md-12 bg-light bg-opacity-25 shadow w-100 rounded-2 mt-3 mb-3">
              <div className="order d-flex justify-content-around fw-bolder align-items-center">
                <p className="">{item?.dateOrdered?.slice(0, 10)}</p>
                <p className="">{item?.totalPrice}</p>
                <p className="ml-5">{item?.status}</p>
              </div>
            </div>
          </div>
        ))}

      <Link to={"/"}>
        <button className=" btn  border-2 border-black m-3 text-black">
          Return to Shop
        </button>
      </Link>
    </div>
  );
}
