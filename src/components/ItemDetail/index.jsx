import React from "react";
import './ItemDetail.scss';



function FormatNumber(number) {
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
                        <p>{item.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;