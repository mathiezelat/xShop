import './CartItemCount.scss'
const CartItemCount = ({items, removeOneItem, addOneItem})=>{
    const {item, quantity} = items;
    return(
    <div className='cart-item-count-container'>
        <button disabled={quantity <= 1} onClick={()=>removeOneItem(item)}>-</button>
            <p>{quantity}</p>
        <button disabled={item.stock <= quantity} onClick={()=>addOneItem(item)}>+</button>
    </div>
    )
}
export default CartItemCount;