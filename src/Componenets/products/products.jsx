import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './products.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from './../../slice/slice';
import formatCurrency from '../formatcurrency';
import { Button } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext'; // Ensure you import the context correctly

function Products() {
    const [products, setProducts] = useState([]);
    const [hoverProduct, setHoverProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

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

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prevPage => (prevPage * productsPerPage < products.length ? prevPage + 1 : prevPage));
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {currentProducts.map((product) => (
                    <ProductItem 
                        key={product.id} 
                        product={product} 
                        hoverProduct={hoverProduct}
                        handleMouseOver={handleMouseOver}
                        handleMouseOut={handleMouseOut}
                        handleToggleFavorite={handleToggleFavorite}
                        isFavorite={isFavorite}
                    />
                ))}
            </div>
            <div className="d-flex justify-content-between mt-4">
                <Button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</Button>
                <Button onClick={handleNextPage} disabled={indexOfLastProduct >= products.length}>Next</Button>
            </div>
        </div>
    );
}

function ProductItem({ product, hoverProduct, handleMouseOver, handleMouseOut, handleToggleFavorite, isFavorite }) {
    const { getItemsQuantity, increaseQuantity, decreaseQuantity, removeItem } = useShoppingCart();
    const quantity = getItemsQuantity(product.id);

    return (
        <div 
            onMouseOver={() => handleMouseOver(product.id)}
            onMouseOut={handleMouseOut}
            className="col"
        >
            <div className="card no-border">
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
                                ? <i className="fa-solid fa-heart iconwishfavourit"></i> 
                                : <i className="fa-regular fa-heart iconwish"></i>}
                        </button>
                        <Link to={`/details/${product.id}`}>
                            <i className="fa-regular fa-eye icondetails"></i>
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
}

export default Products;
