import React from "react";
import iconCart from './shop-bag-icon.svg';
import './CartWidget.scss';

const CartWidget = ()=>{
    return(
        <li><a href="#" className="icon-shop-fondo"><img className="icon-shop" src={iconCart} alt="Icon Shop" /></a></li>
    )
}

export default CartWidget;