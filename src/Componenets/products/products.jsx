

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './products.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from './../../slice/slice';

function Products() {
    const [products, setProducts] = useState([]);
    const [hoverProduct, setHoverProduct] = useState(null);

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
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then((res) => {
                setProducts(res.data);
            });
    }, []);

    const handleMouseOver = (productId) => {
        setHoverProduct(productId);
    };

    const handleMouseOut = () => {
        setHoverProduct(null);
    };

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {products.map((product) => (
                    <div key={product.id} className="col">
                        <div 
                            onMouseOver={() => handleMouseOver(product.id)}
                            onMouseOut={handleMouseOut}
                            className="card no-border"
                        >
                            <div className='position-relative'>
                                <img src={product.images} className="card-img-top" alt={product.title} />
                                <Link 
                                    to={`/cart`} 
                                    className={`btn btn-dark w-100 showbutton ${hoverProduct === product.id ? 'd-block' : 'd-none'}`}
                                >
                                    Add to cart
                                </Link>
                                <div className='icons'>
                                    <button onClick={() => handleToggleFavorite(product)} className="btn-icon favourit">
                                        {isFavorite(product) 
                                            ? <i className="fa-solid fa-heart iconwishfavourit "></i> 
                                            : <i className="fa-regular fa-heart iconwish"></i>}
                                    </button>
                                    <Link to={`/details/${product.id}`}>
                                        <i className="fa-regular fa-eye icondetails"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p>{product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;

