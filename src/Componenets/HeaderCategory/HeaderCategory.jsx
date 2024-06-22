import React from "react";
import style from "../Home/Home.module.css";
import { useQuery } from "react-query";
import { getAllCategory } from "../../api/api";
import { useNavigate } from "react-router-dom";
export default function HeaderCategory() {
  const navigate = useNavigate();
  const { data } = useQuery("getAllCategory", getAllCategory);

  return (
    <div
      className={`${style.imageContainer} w-full flex justify-around items-center my-3`}
    >
      {data?.data?.data?.map((category) => (
        <div
          className="flex flex-col  items-center cursor-pointer"
          key={category?._id}
          onClick={() =>
            navigate(`/category/${category?._id}`, {
              state: {
                name: category?.name,
              },
            })
          }
        >
          <img
            src={category?.icon}
            alt="Electronic Accessories category"
            className={style["small-rounded-img"]}
          />
          <h6 className="">{category?.name}</h6>
        </div>
      ))}
    </div>
  );
}
