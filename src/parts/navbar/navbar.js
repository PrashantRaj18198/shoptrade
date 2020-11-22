import React from 'react';
import {
    useSelector
} from 'react-redux';
import './navbar.css';

// import logo from '../logo.svg';

const Navbar = () => {

    const { cartItemCount } = useSelector(state => state.component)
    const circle = (
        <div className="circle">
            { cartItemCount }
        </div>
    )

    return (
        <div className="nav-container">
            <div className="space-box">
                <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo"></img>
            </div>
            
            <div className="space-box mobile-hide">
                <span className="space-box">Shop</span>
                <span className="space-box">About Us</span>
                <span className="space-box">Our Stores</span>
                <span className="space-box">Contact Us</span>
            </div>

            <div className="space-box">
                <img src={`${process.env.PUBLIC_URL}/images/search.svg`} alt="search"></img>
                <img src={`${process.env.PUBLIC_URL}/images/account.svg`} alt="account"></img>
                <img src={`${process.env.PUBLIC_URL}/images/cart.svg`} alt="cart"></img>
                {circle}
            </div>
        </div>
    )
}

export default Navbar;