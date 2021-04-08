import React, { useContext, useState } from "react";
import './ItemDetail.scss';
import ItemCount from '../ItemCount';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";



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
const ItemDetail = ({item = {img: '', name: 'Error', price: 0, desc:'Producto no encontrado'}})=>{
    const [count, setCount] = useState(0)
    const {addItem} = useContext(CartContext);
    const addHandler = (quantity)=>{
        setCount(quantity)
        console.log(`Se agrego ${quantity} producto/s `)
        addItem(item,quantity)
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
                    <div className="item-detail-name">
                        <h1>{item.name}</h1>
                    </div>
                    <div className="item-detail-price">
                        <p>{FormatNumber(item.price)}</p>
                    </div>
                    <div className="item-detail-desc">
                        <p>{item.info}</p>
                    </div>
                </div>
                <div className="item-count-add">
                    {count === 0 ? <ItemCount stock={item.stock} initial="1" onAdd={addHandler} /> : <Link to='/cart'><button className="btn-end-buy" >Terminar compra</button></Link>}            
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;