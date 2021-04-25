import React from "react";
import { Link } from "react-router-dom";
import { formatNumber, onClickUp } from "../../utils";
import './Item.scss'


const Item = ({item})=> {
    return (
        <Link to={`/item/${item.id}`} className="link-styles" onClick={onClickUp}>
            <div className="item">
                <div className="item-contain">
                    <div className="item-image-contain">
                    <div className="img-item">
                        <img src={item.img} alt=""/>
                    </div>
                    {(item.envio) ? (<div className="item-envio"> <img src="/images/envio.svg" alt="envio"/> </div>) : null}

                    </div>
                    <div className="item-content">
                    <div className="title-item">
                        <h3>{item.title}</h3>
                    </div>
                    <div className="price-item">
                        <p>{formatNumber(item.price)}</p>
                    </div>
                    <div className="desc-item">
                        <p>{item.description}</p>
                    </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item;