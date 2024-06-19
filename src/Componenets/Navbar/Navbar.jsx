// src/components/Navbar/Navbar.js
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import {
  faHeart,
  faShoppingCart,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useSearch } from "../context/SearchContext";


export default function Navbar() {
  const { getTotalQuantity } = useShoppingCart();
  const { isLoggedOut, setIsLoggedOut } = useSearch();
  const totalQuantity = getTotalQuantity();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/filters?query=${searchQuery}`);
    }
  };
  //////////////////
  function handleLogout() {
    localStorage.clear();
    setIsLoggedOut(true);
  }
  //////////////
  useEffect(() => {
    if (isLoggedOut) {
      setIsLoggedOut(false);
    }
  }, [isLoggedOut, setIsLoggedOut]);

  return (
    <nav className="navbar">
      <div className="navbar-logo ms-5">
        <h1>
          Techno<span className="text-danger">Core</span>
        </h1>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="What are you looking for?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="navbar-icons me-5">
        <Link to={"/whislist"} className="navbar-icon">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <Link to={"/cart"} className="navbar-icon">
          <FontAwesomeIcon icon={faShoppingCart} />
          {totalQuantity > 0 && (
            <span className="navbar-icon-badge">{totalQuantity}</span>
          )}
        </Link>
        {localStorage.getItem("token") && (
          <Link to={"/editprofile"} className="navbar-icon user">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        )}
        {localStorage.getItem("roleUser") === "Admin" && (
          <button onClick={()=>navigate('/dashboard')} className="navbar-icon user">
            <MdDashboard />
          </button>
        )}
        {localStorage.getItem("token") && (
          <button className="navbar-icon user" onClick={handleLogout}>
            {" "}
            <FiLogOut />
          </button>
        )}
      </div>
    </nav>
  );
}
