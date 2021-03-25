import React from "react";
import './CartWidget.scss';

import {Link} from 'react-router-dom';


const CartWidget = ()=>{
    return(
        <li><Link to='/cart' className="icon-shop-fondo"><img className="icon-shop" src="/images/shop-bag-icon.svg" alt="Icon Shop" /></Link></li>
    )
}

export default CartWidget;