import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Navbar() {

 
  return (
    <>
    <nav className="navbar">
            <div className="navbar-logo ms-5">
                <h1>Techno<span className='text-danger'>Core</span></h1>
            </div>
            <div className="navbar-search">
                <input type="text" placeholder="What are you looking for?" />
                <button type="submit">
                    <FontAwesomeIcon icon="search" />
                </button>
            </div>
            <div className="navbar-icons me-5">
                <Link to={"/whislist"} className="navbar-icon">
                    <FontAwesomeIcon icon={faHeart} />
                </Link>
                <Link to={"/cart"} className="navbar-icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className="navbar-icon-badge">0</span>
                </Link>
                <Link to={"/editprofile"} className="navbar-icon user">
                    <FontAwesomeIcon icon={faUser} />
                </Link>
                
            </div>
           
        </nav>

        
     </>
  )
}
