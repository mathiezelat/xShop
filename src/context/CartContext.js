import { createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartProviderContext = ({children}) =>{
    const [cart, setCart] = useState([])

    const CartLength = () =>{
        return cart.reduce((prev, next) => {return prev + next.quantity}, 0)
    }
    const CartPrice = () =>{
        return cart.reduce((prev, next) => {return prev + next.quantity * next.item.price}, 0)
    }

    const addItem = (newItem, newQuantity)=>{
        if (isInCart(newItem.id) === -1){
            setCart([...cart, { item: newItem, quantity: newQuantity }])
        } else {
            const {quantity} = cart.find(e => e.item.id === newItem.id)
            const newCart = cart.filter(e => e.item.id !== newItem.id)
            setCart([...newCart, { item: newItem , quantity: quantity + newQuantity }])
        }
    }
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
        <CartContext.Provider value={ {cart,addItem,removeItem,clear,isInCart,CartLength, CartPrice} } >
            {children}
        </CartContext.Provider>
    )

}