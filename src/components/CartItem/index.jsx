import React, {useContext} from 'react'
import './CartItem.scss';

import { CartContext } from "../../context/CartContext";
import { formatNumber } from '../../utils';
import CartItemCount from '../CartItemCount';

const CartItem = ({items})=>{
    const {removeItem, removeOneItem, addOneItem} = useContext(CartContext);
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
                    <div className="cart-title-contain">
                        <h2>{item.title}</h2>
                    </div>
                    <div className="cart-quantity-contain">
                        <CartItemCount items={items} removeOneItem={removeOneItem} addOneItem={addOneItem}/>
                    </div>
                    <div className="cart-price-contain">
                        <p>{formatNumber(item.price * quantity)}</p>
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