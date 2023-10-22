import React from "react";
import { Link } from "react-router-dom";
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/084 crown.svg';

const Header = () => (
    <div className="header">
       <Link to="/" className="logo-container">
        <Logo className="logo"></Logo>
       </Link>
       <div className="options">
       <Link to="/shop" className="option">
       SHOP
       </Link>     
       <Link to="/contact" className="option">
       CONTACT
       </Link>    
       </div>
    </div>
)

export default Header;