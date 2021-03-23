import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shop.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <div className='link-options'>
        <Link to='/shop' className='link'>
          SHOP
        </Link>
        <Link to='/contact' className='link'>
          CONTACT
        </Link>
        {/* {currentUser ? (
          <span className='link'>
            SIGN OUT
          </span>
        ) : ( */}
        <Link to='/signin' className='link'>
          SIGN IN
        </Link>
        {/* )} */}
      </div>
    </div>
  );
};

export default Header;
