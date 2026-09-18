import React from "react";
import "./Header.scss";
import { LOGIN_OPTIONS, LOGO_IMAGE_URL } from "../../constants/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [loginOptionIndex, setLoginOption] = React.useState(0);
    const handleLoginClick = () => {
        setLoginOption((prev) => (prev + 1) % LOGIN_OPTIONS.length);
    }
    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src={LOGO_IMAGE_URL} alt="Logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <div className="login-container">
                    <button className="login-btn" onClick={handleLoginClick}>
                        {LOGIN_OPTIONS[loginOptionIndex]}
                    </button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Header;