import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import style from './details.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from './../../slice/slice'

function Details() {
  const { id } = useParams()
  const [detailsprd, setdetailprd] = useState(null)


  const dispatch = useDispatch();
  const favoriteProducts = useSelector(state => state.favoriteproducts.products);

  const handleToggleFavorite = (product) => {
      if (isFavorite(product)) {
          dispatch(removeFromFavorites(product));
      } else {
          dispatch(addToFavorites(product));
      }
  };

  const isFavorite = (product) => {
      return favoriteProducts.some(favProduct => favProduct.id === product.id);
  };

  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).then((res) => {
      setdetailprd(res.data)
    })
  }, [id])

  return (
    <>
      {detailsprd ? (
        <div className={style.parentdiv}>
            <div className={style.childone}>
            <img src={detailsprd.images} className="w-100" alt={detailsprd.title} />
            </div>
            <div className= {style.childttwo}>
                <h1>{detailsprd.title}</h1>
                <p>{detailsprd.description}</p>
                <p>${detailsprd.price}</p>
                <hr></hr>
                <div className='d-flex justify-content-center  '>
        <Link to={'/checkout'}>
            <button className='btn btn-danger mx-5 px-5'> Buy Now</button>
        </Link>
        <button onClick={() => handleToggleFavorite(detailsprd)} className={`btn-icon ${style.favProduct}`}>
                                        {isFavorite(detailsprd) 
                                            ? <i className="fa-solid fa-heart iconwishfavourit  p-2"></i> 
                                            : <i className="fa-regular fa-heart iconwish p-2"></i>}
                                    </button>
                </div>
            </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default Details



