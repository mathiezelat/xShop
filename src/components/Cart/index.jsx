import React, { useContext, useEffect, useState } from 'react';
import CartItem from '../CartItem'
import { Link } from "react-router-dom";
import './Cart.scss'
import { CartContext } from "../../context/CartContext";
import {Loading} from '../Loading'

const onClickUp = () => {
    window.scrollTo(0,0)
}

const FormatNumber = (number) => {
    return (
(number) ? 
    <span style={{ color: "#000" }}>
        {new Intl.NumberFormat("ES-AR", {
        style: "currency",
        currency: "ARS"
        }).format(number)}
    </span>
    : null
    );
}
const Cart = ()=>{
    const [loading, setLoading] = useState(true)
    const {cart,clear, CartLength, CartPrice} = useContext(CartContext);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1000)
        return(()=>{
            setLoading(true)
            onClickUp()
        })
    },[])
    if(loading) return <Loading />
    return(
        (CartLength() !== 0) ? (
        <div className="container-cart">
            <h1>Carrito de compras</h1>
            <div className="container-cart-items">
            {cart.map((items)=> <CartItem key={items.item.id} items={items}/>)}
            </div>
            <div className="cart-contain-info-items">
                <div className="btn-clear-cart">
                    <button onClick={()=> clear()}>Limpiar Carrito</button>
                </div>  
                <div className="cart-info-items-total">
                    <p>Cantidad de productos: {CartLength()}</p>
                    <p>Total: {FormatNumber(CartPrice())}</p>
                </div>
            </div>
        </div>) : (
            <div className="container-cart-empty">
                <h1>Tu carrito está vacío</h1>
                <Link to='/'>Volver a Inicio</Link>
            </div>
        )
    )
}
export default Cart;