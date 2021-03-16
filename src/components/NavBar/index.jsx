import React from "react";
import './NavBar.scss';
import navSlide from './navSlideApp.js';
import navCollapse from './navCollapse.js';
import CartWidget from '../CartWidget/index';
import logo from './logo.svg';

const NavBar = () =>{
    return (
        <header>
            <nav>
                <div className="logo">
                    <a href="#"><img src={logo} alt="xShop Logo"/></a>
                </div>
                <ul className="nav-links">
                    <li><a href="#" onMouseEnter={navCollapse} >Inicio</a></li>
                    <li><a href="#" onMouseEnter={navCollapse} >Nosotros</a></li>
                    <li><a href="#" onMouseEnter={navCollapse} >Productos</a></li>
                    <li><a href="#" onMouseEnter={navCollapse} >Ayuda</a></li>
                    <CartWidget />
                </ul>
                <div className="burger" onClick={navSlide}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;