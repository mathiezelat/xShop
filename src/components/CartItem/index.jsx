import React, {useContext} from 'react'
import './CartItem.scss';

import { CartContext } from "../../context/CartContext";
import { FormatNumber } from '../../utils';

const CartItem = ({items})=>{
    const {removeItem} = useContext(CartContext);
    const {item, quantity} = items;
    return(
        <div className="cart-item">
            <div className="cart-item-contain">
                <div className="cart-image-contain">
                    <div className="cart-img-item">
                        <img className="cart-img" src={item.img} alt="" />
                    </div>
                </div>
                <div className="cart-info-contain">
                    <div className="cart-name-contain">
                        <h2>{item.name}</h2>
                    </div>
                    <div className="cart-quantity-contain">
                        <p>{quantity}</p>
                    </div>
                    <div className="cart-price-contain">
                        <p>{FormatNumber(item.price * quantity)}</p>
                    </div>
                    
                    <div className="cart-btn-remove-item-contain">
                        <img src="/images/delete.svg" alt="" onClick={()=>removeItem(item.id)} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartItem;