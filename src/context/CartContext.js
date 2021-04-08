import React, { useState } from 'react';

export const CartContext = React.createContext({});

export const CartProviderContext = ({children}) =>{
    const [cart, setCart] = useState([])
    const addItem = (newItem, newQuantity)=>{
        if (isInCart(newItem.id) === -1){
            setCart([...cart, { item: newItem, quantity: newQuantity }])
        } else {
            const {quantity} = cart.find(e => e.item.id === newItem.id)
            const newCart = cart.filter(e => e.item.id !== newItem.id)
            setCart([...newCart, { item: newItem , quantity: quantity + newQuantity  }])
        }
    }
    console.log(cart)
    const removeItem = (itemId) =>{
        const newCart = cart.filter(e=>e.item.id !== itemId)
        setCart(newCart)
    }
    const clear = ()=>{
        setCart([])
    }
    const isInCart = (id) =>{
        return cart.findIndex(e=> e.item.id === id)
    }
    
    return(
        <CartContext.Provider value={ {cart,addItem,removeItem,clear,isInCart} } >
            {children}
        </CartContext.Provider>
    )

}