import React from "react";
import './NavBar.scss';
import navSlide from './navSlideApp.js';
import subNavEnter from './subNavEnter.js';
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
                    <li className="sub-nav"><NavLink to='#' activeClassName="no" onMouseDown={subNavEnter}>Categorias<img className="arrow-expand" src="/images/arrow.svg" alt=""/></NavLink>
                    <ul className="sub-nav-links">
                        <li><NavLink to={`/category/iMac`} onClick={subNavEnter}>iMac</NavLink></li>
                        <li><NavLink to={`/category/MacBook`} onClick={subNavEnter}>MacBook</NavLink></li>
                        <li><NavLink to={`/category/iPhone`} onClick={subNavEnter}>iPhone</NavLink></li>
                        <li><NavLink to={`/category/Watch`} onClick={subNavEnter}>Watch</NavLink></li>
                    </ul>
                    </li>
                    <li><NavLink to='/nosotros' activeClassName="active" >Nosotros</NavLink></li>
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