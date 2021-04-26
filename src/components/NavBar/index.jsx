import React, { useEffect, useState} from "react";
import './NavBar.scss';
import CartWidget from '../CartWidget/index';
import {NavLink, Link} from 'react-router-dom';
import { onClickUp } from "../../utils";
import { getCategory } from "../../services";

const NavBar = () =>{
    const [activeDropdown, setActiveDropdown] = useState(false);
    const [activeSlide, setActiveSlide] = useState(false);
    const [categoria, setCategoria] = useState(['Cargando'])
    useEffect(()=>{
        getCategory().then((snaptshot=>{
            setCategoria(snaptshot.docs.map(doc=>{
                return {name: doc.name, ...doc.data()}
            }))
        }))
    }, [])
    const slideNav = ()=>{
        setActiveSlide(!activeSlide)
    }
    const dropDown = ()=>{
        setActiveDropdown(!activeDropdown)
    }
    const clickUpSlideOff = ()=>{
        onClickUp()
        setActiveSlide(false)
        setActiveDropdown(false)
    }
    const dropSlide = ()=>{
        setActiveSlide(false)
        setActiveDropdown(false)
        onClickUp()
    }
    return (
        <header>
            <nav>
                <div className="logo">
                    <NavLink to='/' onClick={onClickUp}><img src="/images/logo.svg" alt="xShop Logo"/></NavLink>
                </div>
                <ul className={`nav-links ${activeSlide ? 'nav-active nav-active-mov' : ''}`}>
                    {activeDropdown ? <div className="dropdown-off" onMouseEnter={dropDown} ></div> : null }
                    <li><NavLink to='/' exact activeClassName="active"  onClick={clickUpSlideOff}  >Inicio</NavLink></li>
                    <li className="sub-nav"><NavLink to='#' activeClassName="no" onMouseDown={dropDown}>Categorias
                    <svg className="arrow-expand" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M24 24H0V0h24v24z" fill="none" opacity="0"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
                    </NavLink>
                        <ul className={`sub-nav-links ${activeDropdown ? 'active-subnav' : ''}`}>
                            {categoria.map(categoria => {
                                return (<li key={categoria.name}><Link to={`/category/${categoria.name}`} onClick={dropSlide}>{categoria.name}</Link></li>)
                            })}
                        </ul>
                    </li>
                    <li><NavLink to='/nosotros' activeClassName="active" onClick={clickUpSlideOff} >Nosotros</NavLink></li>
                    <li><NavLink to='/ayuda' activeClassName="active" onClick={clickUpSlideOff}>Ayuda</NavLink></li>
                    <CartWidget ClickUpSlideOff={clickUpSlideOff} />
                </ul>
                <div className={`burger ${activeSlide ? 'toggle' : ''}`} onClick={slideNav}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;