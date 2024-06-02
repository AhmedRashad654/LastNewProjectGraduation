import React from 'react'
import {useSelector,useDispatch } from 'react-redux';
import { removeFromFavorites } from '../../slice/slice';
import style from './whislist.module.css'

export default function Whislist() {
  const favoriteProducts = useSelector(state => state.favoriteproducts.products);
  const dispatch = useDispatch();
  const removeproduct=(prd)=>{
    dispatch(removeFromFavorites(prd));
  }
  return (
    <div>
      <div className="row">
        {favoriteProducts.map((product) => ( // Use favoriteMovies.map to iterate over each favorite movie
          <div className={`col-lg-3 col-md-6 mb-4 ${style.parent}`} key={product.id} style={{ marginLeft: '80px' }}>
            <div className="card">
            <img src={product.images} className="card-img-top" alt={product.title} />
              <h3 className="card-title">{product.title}</h3>
            </div>
            <button  className={`btn btn-light ${style.button} `}  onClick={()=>removeproduct(product)}><i class="fa-regular fa-trash-can"></i></button>
          </div>
        ))}
      </div>
    </div>
  )
}