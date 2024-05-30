import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import './products.css'; // Import your custom CSS file

function Products() {
    const [products, setProduct] = useState([]);
    const [hoverProduct, setHoverProduct] = useState(null);

    useEffect(() => {
        axios.get("https://api.escuelajs.co/api/v1/products")
            .then((res) => {
                setProduct(res.data);
            });
    }, []); // Added empty dependency array to ensure the effect runs only once

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
                    <div key={product.id}>
                        <div className="col"
                            onMouseOver={() => handleMouseOver(product.id)}
                            onMouseOut={handleMouseOut}>
                            <div className="card no-border">
                                <div>
                                    <img src={product.images} className="card-img-top" alt={product.title} />
                                    <Link className={`btn btn-dark w-100 showbutton ${hoverProduct === product.id ? 'd-block' : 'd-none'}`}>
                                        Add to cart
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p>{product.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
