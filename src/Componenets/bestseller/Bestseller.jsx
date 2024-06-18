import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import './bestseller.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from './../../slice/slice';
import formatCurrency from '../formatcurrency';
import { Button } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext'; // Assuming you have a shopping cart context
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

function Bestseller() {
    const [products, setProducts] = useState([]);
    const [hoverProduct, setHoverProduct] = useState(null);

    const dispatch = useDispatch();
    const favoriteProducts = useSelector(state => state.favoriteproducts.products);
    const { getItemsQuantity, increaseQuantity, decreaseQuantity, removeItem } = useShoppingCart();

    useEffect(() => {
        axios.get("https://api.escuelajs.co/api/v1/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleMouseOver = (productId) => {
        setHoverProduct(productId);
    };

    const handleMouseOut = () => {
        setHoverProduct(null);
    };

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

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {products.slice(0, 4).map((product) => {
                    const quantity = getItemsQuantity(product.id);
                    return (
                        <div key={product.id} className="col">
                            <div
                                onMouseOver={() => handleMouseOver(product.id)}
                                onMouseOut={handleMouseOut}
                                className="card no-border"
                            >
                                <div className='position-relative'>
                                    <img src={product.images[0]} className="card-img-top" alt={product.title} />
                                    {quantity === 0 ? (
                                        <Button onClick={() => increaseQuantity(product.id)} className={`btn btn-dark w-100 showbutton ${hoverProduct === product.id ? 'd-block' : 'd-none'}`}>
                                            Add to Cart
                                        </Button>
                                    ) : (
                                        <div className={`w-100 ${hoverProduct === product.id ? 'd-block' : 'd-none'}`}>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <Button onClick={() => increaseQuantity(product.id)} size='sm'>+</Button>
                                                <span>{quantity} in cart</span>
                                                <Button onClick={() => decreaseQuantity(product.id)} size='sm'>-</Button>
                                            </div>
                                            <Button onClick={() => removeItem(product.id)} variant="danger" className="mt-2">Remove</Button>
                                        </div>
                                    )}
                                    <div className='icons'>
                                        <button onClick={() => handleToggleFavorite(product)} className="btn-icon favourit">
                                            {isFavorite(product) 
                                                ? <FontAwesomeIcon icon={solidHeart} className="iconwishfavourit" /> 
                                                : <FontAwesomeIcon icon={regularHeart} className="iconwish" />}
                                        </button>
                                        <Link to={`/details/${product.id}`}>
                                            <FontAwesomeIcon icon={faEye} className="icondetails" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p>{formatCurrency(product.price)}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Bestseller;

