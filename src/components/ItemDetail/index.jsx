import React, { useContext, useEffect, useState } from "react";
import './ItemDetail.scss';
import ItemCount from '../ItemCount';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const onClickUp = () => {
    window.scrollTo(0,0)
}

const FormatNumber = (number) => {
    return (
    (number) ? 
        <span style={{ color: "green" }}>
            {new Intl.NumberFormat("ES-AR", {
            style: "currency",
            currency: "ARS"
            }).format(number)}
        </span>
    : null
    );
}
const ItemDetail = ({item = null})=>{
    const [count, setCount] = useState(0)
    const {cart, addItem} = useContext(CartContext);
    const addHandler = (quantity)=>{
        setCount(quantity)
        addItem(item,quantity)
    }
    const cartCount = (quantity)=>{
        let indexItem = cart.findIndex(cartItem => cartItem.item.id === item.id);
        if (indexItem !== -1){
            quantity = cart[indexItem].quantity
        }
        return quantity
    }
    useEffect(()=>{
        return(()=>{
            onClickUp()
        })
    }, [])
    return(
        <div className="item-detail">
            <div className="item-detail-image-contain">
                <div className="item-detail-img">
                    <img src={item.img} alt=""/>
                </div>
            </div>
            <div className="item-detail-content-container">
                <div className="item-detail-content">
                    <div className="item-detail-vendidos">
                        <p>Nuevo | {item.vendidos} vendidos</p>
                    </div>
                    <div className="item-detail-name">
                        <h1>{item.name}</h1>
                    </div>
                    {(item.destacado) ? (
                        <div className="item-detail-destacado">
                            <p>Destacado</p>
                        </div>
                    ) : null}
                    <div className="item-detail-price">
                        <p>{FormatNumber(item.price)}</p>
                    </div>
                    <div className="item-detail-desc">
                        <p>{item.info}</p>
                    </div>
                {(item.stock > 1) ? (
                        <div className="item-detail-stock">
                            <h2>Stock Disponible</h2>
                            <p>({item.stock} disponibles)</p>
                        </div>
                    ) : null}
                </div>
                <div className="item-count-add">
                    {(item.stock - cartCount(count) !== 0) ? (count === 0 ? (<>
                    <ItemCount stock={item.stock - cartCount(count)} initial={cartCount(count) ? cartCount(count) - cartCount(count) + 1: 1} onAdd={addHandler} />
                    {(cartCount(count)) ? (
                    <div className="item-cart-count-full">
                    <h4>Tenes {cartCount(count)} productos en el carrito</h4>
                    <Link to='/cart'><button className="btn-end-buy" >Terminar compra</button></Link>
                    </div>
                    ) : null}
                    </>) : 
                    (
                        <div className="item-cart-count-full">
                        <h4>Tenes {cartCount(count)} productos en el carrito</h4>
                        <Link to='/cart'><button className="btn-end-buy" >Terminar compra</button></Link>
                        </div>
                    )) :
                    ((cartCount(count) !== 0) ? 
                    (<div className="item-cart-count-full">
                    <h4>Tenes {cartCount(count)} productos en el carrito</h4>
                    <Link to='/cart'><button className="btn-end-buy" >Terminar compra</button></Link>
                    </div>) : 
                    (<div className="item-cart-count-full">
                    <h2>Sin Stock</h2>
                    </div>
                    ))}        
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;