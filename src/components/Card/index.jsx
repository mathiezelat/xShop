import React from "react";
import './Card.scss'

const Card = ({img, name, desc})=> {
    return (
        <div className="item">
            <div className="item-contain">
                <div className="item-image-contain">
                <div className="img-item">
                    <img src={img} alt=""/>
                </div>
                </div>
                <div className="item-content">
                <div className="name-item">
                    <h3>{name}</h3>
                </div>
                <div className="desc-item">
                    <p>{desc}</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card;