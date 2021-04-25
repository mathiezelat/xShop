import React, { useContext, useEffect, useState } from 'react';
import './Cart.scss'
import { CartContext } from "../../context/CartContext";
import {Loading} from '../Loading'
import firebase from 'firebase/app'
import 'firebase/firestore'
import CartItemListContainer from '../CartItemListContainer';
import CartFinishBuy from '../CartFinishBuy';
import { onClickUp } from '../../utils';
import { itemsToUpdate, createOrder } from '../../services';

const Cart = ()=>{
    const [loading, setLoading] = useState(false)
    const [finishBuy, setFinishBuy] = useState(false)
    const [paid, setPaid] = useState(false)
    const [order, setOrder] = useState('')
    const [user, setUser] = useState({nombre: '', apellido: '', telefono: '', mail: '', mail2Value: ''})
    const {cart,clear,cartPrice} = useContext(CartContext);
    const {nombre,apellido,telefono,mail} = user;
    useEffect(()=>{
        return(()=>{
            onClickUp()
            setLoading(true)})
    },[])
    const generateOrder = ()=>{
        setLoading(true)
        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date())
        orden.buyer = {name: `${nombre} ${apellido}`, phone: telefono, email: mail}
        orden.total = cartPrice
        orden.items = cart.map(cartItem => {
            const id = cartItem.item.id;
            const title = cartItem.item.title;
            const price = cartItem.item.price * cartItem.quantity;
            const quantity = cartItem.quantity;
            return {id,title,price,quantity}})
        createOrder(orden)
        .then(({id})=>{setOrder(id);setPaid(true);itemsToUpdate(cart);clear();})
        .catch( err => {console.log(err)})
        .finally(()=>{setLoading(false)})
    }
    if(loading) return <Loading />
    if(finishBuy) return (<CartFinishBuy generateOrder={generateOrder} user={user} setUser={setUser} paid={paid} order={order} />)
    return(<CartItemListContainer setFinishBuy={setFinishBuy} finishBuy={finishBuy} />)
}
export default Cart;