import React from 'react';
import './Nav.css';
import Logo from './logowhite.png';

export default props => (
    <>
        <nav className="navbar nav-background" id="navbar">
            <a className="navbar-brand" href="#">
                <img src={Logo} alt="logo" loading="lazy" className="logo"/>
            </a>
            <a href="" className="username">
                Username <span className="icon"><i className="fab fa-bitcoin"><span className="coin">10</span></i></span>
            </a>
        </nav>
    </>
);