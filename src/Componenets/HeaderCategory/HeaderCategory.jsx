import React from "react";
import { useQuery } from "react-query";
import { getAllCategory } from "../../api/api";
import { useNavigate } from "react-router-dom";
import styles from './HeaderCategory.module.css'; // Updated CSS import

export default function HeaderCategory() {
  const navigate = useNavigate();
  const { data } = useQuery("getAllCategory", getAllCategory);

  return (
    <div className={`${styles.imageContainer} flex justify-center items-center my-3`}>
      {data?.data?.data?.map((category) => (
        <div
          className={`${styles.category} cursor-pointer`}
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
            alt={`${category?.name} category`}
            className={styles.largeRoundedImg}
          />
          <h6 className={styles.categoryName}>{category?.name}</h6>
        </div>
      ))}
    </div>
  );
}
