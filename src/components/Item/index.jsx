import React from "react";
import { Link } from "react-router-dom";
import './Item.scss'

const onClickUp = () => {
    window.scrollTo(0,0)
}

const FormatNumber = (number) => {
    return (
(number) ? 
    <span style={{ color: "#333" }}>
        {new Intl.NumberFormat("ES-AR", {
        style: "currency",
        currency: "ARS"
        }).format(number)}
    </span>
    : null
    );
}

const Item = ({item})=> {
    return (
        <Link to={`/item/${item.id}`} className="link-styles" onClick={onClickUp}>
            <div className="item">
                <div className="item-contain">
                    <div className="item-image-contain">
                    <div className="img-item">
                        <img src={item.img} alt=""/>
                    </div>
                    </div>
                    <div className="item-content">
                    <div className="name-item">
                        <h3>{item.name}</h3>
                    </div>
                    <div className="price-item">
                        <p>{FormatNumber(item.price)}</p>
                    </div>
                    <div className="desc-item">
                        <p>{item.info}</p>
                    </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item;