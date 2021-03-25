import React from "react";
import './NavBar.scss';
import navSlide from './navSlideApp.js';
import CartWidget from '../CartWidget/index';

import {NavLink} from 'react-router-dom';

const NavBar = () =>{
    return (
        <header>
            <nav>
                <div className="logo">
                    <NavLink to='/'><img src="/images/logo.svg" alt="xShop Logo"/></NavLink>
                </div>
                <ul className="nav-links">
                    <li><NavLink to='/' exact activeClassName="active" >Inicio</NavLink></li>
                    <li><NavLink to='/nosotros' activeClassName="active" >Nosotros</NavLink></li>
                    <li><NavLink to={`/category/1`} activeClassName="active" >Productos</NavLink></li>
                    <li><NavLink to='/ayuda' activeClassName="active" >Ayuda</NavLink></li>
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