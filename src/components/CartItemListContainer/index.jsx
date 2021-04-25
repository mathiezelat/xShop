import React, { useContext } from 'react';
import './CartItemListContainer.scss'
import CartItem from '../CartItem'
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { formatNumber } from "../../utils";

const CartItemListContainer = ({setFinishBuy, finishBuy})=>{   
    const {cart,clear,cartLength,cartPrice} = useContext(CartContext);
    if (!cartLength) return (
    <div className="container-cart-empty">
    <h1>Tu carrito está vacío</h1>
    <Link to='/' className="btn-volver-inicio">Volver a Inicio</Link>
    </div>)
    return(
    <div className="container-cart">
        <h1>Carrito de compras</h1>
        <div className="container-cart-items">
        {cart.map((items)=> <CartItem key={items.item.id} items={items}/>).sort((a, b) =>a.props.items.item.title.localeCompare(b.props.items.item.title) )}
        </div>
        <div className="cart-contain-info-items">
            <div className="btn-clear-cart">
                <button onClick={()=> clear()}>Limpiar Carrito</button>
            </div>  
            <div className="cart-info-items-total">
                <p>Cantidad de productos: {cartLength}</p>
                <p>Total: {formatNumber(cartPrice)}</p>
            </div>
        </div>
            <div className="cart-buy-items">
                <button onClick={()=> setFinishBuy(!finishBuy)}>Comprar</button>
            </div>
    </div>)
}
export default CartItemListContainer;