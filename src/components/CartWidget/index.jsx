import React, { useContext } from "react";
import './CartWidget.scss';

import {Link} from 'react-router-dom';
import {CartContext} from '../../context/CartContext'


const CartWidget = ()=>{
    const {CartLength} = useContext(CartContext)
    return(
        <li>
            <Link to='/cart' className="icon-shop-fondo">
                <img className="icon-shop" src="/images/shop-bag-icon.svg" alt="Icon Shop" />
                {CartLength() ? <div className="cantidad-de-productos-icon-shop">{CartLength()}</div> : null }
            </Link>
        </li>
    )
}

export default CartWidget;