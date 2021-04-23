import React, { useContext } from "react";
import './CartWidget.scss';

import {Link} from 'react-router-dom';
import {CartContext} from '../../context/CartContext'


const CartWidget = ({ClickUpSlideOff})=>{
    const {cartLength} = useContext(CartContext)
    return(
        <li>
            <Link to='/cart' className="icon-shop-fondo" onClick={ClickUpSlideOff}>
                <img className="icon-shop" src="/images/shop-bag-icon.svg" alt="Icon Shop" />
                {cartLength ? <div className="cantidad-de-productos-icon-shop">{cartLength}</div> : null }
            </Link>
        </li>
    )
}

export default CartWidget;