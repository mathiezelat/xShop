import React, {useState, useEffect} from 'react';
import './ItemCount.scss';

const ItemCount = ({stock, initial, onAdd})=>{
    const [count, setCount] = useState(parseInt(initial));
    useEffect(()=>{
        setCount(parseInt(initial));
        return;
    }, [initial]);
    const removeHandle = ()=>{
        setCount(count - 1);
    }
    const addHandle = ()=>{
        setCount(count + 1);
    }
    return (
        <div className="item-count-container">
            <div className="item-count-content">
                <div className="item-count-control">
                    <button disabled={count <= 1} className="item-count-buttons item-count-resta" onClick={removeHandle}>-</button>
                    <div className="item-count-count"><p>{count}</p></div>
                    <button disabled={count >= stock} className="item-count-buttons item-count-suma" onClick={addHandle}>+</button>
                </div>
            </div>
            <div className="item-count-buttom-cart">
                <button disabled={count <= 0 || count > stock} onClick={()=> onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;