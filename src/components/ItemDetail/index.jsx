import React, { useContext, useEffect, useState } from "react";
import './ItemDetail.scss';
import ItemCount from '../ItemCount';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { formatNumber, onClickUp } from "../../utils";

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
    
    const TerminarCompra = ()=>{
        return(
        <div className="item-cart-count-full">
                    <h4>Tenes {cartCount(count)} productos en el carrito</h4>
                    <Link to='/cart'><button className="btn-end-buy" >Terminar compra</button></Link>
        </div>
        )
    }
    const ComprarProducto = ()=>{
        return (
            (count === 0 ? (
                <>
                    <ItemCount stock={item.stock - cartCount(count)} initial={cartCount(count) ? cartCount(count) - cartCount(count) + 1: 1} onAdd={addHandler} />
                    {(cartCount(count)) ? (<TerminarCompra />) : null}
                </>
            ) : <TerminarCompra />)
        )
    }
    const SinStock = ()=>{
        return(
            <div className="item-cart-count-full"><h2>Sin Stock</h2></div>
        )
    }
    const TerminarCompraOSinStock = ()=>{
        return (
            (cartCount(count) !== 0) ? <TerminarCompra /> : <SinStock />
        )
    }
    
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
                    <div className="item-detail-title">
                        <h1>{item.title}</h1>
                    </div>
                    {(item.destacado) ? (
                        <div className="item-detail-destacado">
                            <p>Destacado</p>
                        </div>
                    ) : null}
                    <div className="item-detail-price">
                        <p>{formatNumber(item.price)}</p>
                    </div>
                    <div className="item-detail-desc">
                        <p>{item.description}</p>
                    </div>
                    {(item.envio) ? (
                        <div className="item-detail-envio">
                            <img src="/images/envio.svg" alt=""/>
                            <p>Envio gratis</p>
                        </div>
                    ):null}
                    {(item.stock > 1) ? (
                        <div className="item-detail-stock">
                            <h2>Stock Disponible</h2>
                            <p>({item.stock} disponibles)</p>
                        </div>
                    ) : null}
                </div>
                <div className="item-count-add">
                    {(item.stock - cartCount(count) !== 0) ? <ComprarProducto /> : <TerminarCompraOSinStock />}        
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;