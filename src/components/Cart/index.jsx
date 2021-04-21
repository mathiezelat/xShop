import React, { useContext, useEffect, useState } from 'react';
import './Cart.scss'
import { CartContext } from "../../context/CartContext";
import {Loading} from '../Loading'
import firebase from 'firebase/app'
import 'firebase/firestore'
import {getFirestore} from '../../firebase'
import CartItemListContainer from '../CartItemListContainer';
import CartFinishBuy from '../CartFinishBuy';
import CartFinishPaid from '../CartFinishPaid';
import CartItemContainerEmpty from '../CartItemListContainerEmpty';
import { onClickUp } from '../../utils';


const Cart = ()=>{
    const [loading, setLoading] = useState(false)
    const [finishBuy, setFinishBuy] = useState(false)
    const [paid, setPaid] = useState(false)
    const [order, setOrder] = useState(null)
    const [user, setUser] = useState({nombre: null, apellido: null, telefono: null, mail: null})
    const {cart,clear,cartLength,cartPrice} = useContext(CartContext);
    const {nombre,apellido,telefono,mail} = user;
    useEffect(()=>{
        return(()=>{
            onClickUp()
            setLoading(true)})
    },[])
    const orders = (orden)=>{
        const db = getFirestore();
        const orders = db.collection("orders")
        return orders.add(orden)
    }
    const ItemsToUpdate = ()=>{
        const db = getFirestore();
        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cart.map(i => i.item.id))
        const batch = db.batch()
        itemsToUpdate.get().then(collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref,{
                    stock: docSnapshot.data().stock - cart.find(item => item.item.id === docSnapshot.id).quantity,
                    vendidos: docSnapshot.data().vendidos + cart.find(item => item.item.id === docSnapshot.id).quantity
                })})
            batch.commit()
        })
    }
    const generateOrder = ()=>{
        setLoading(true)
        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date())
        orden.buyer = {name: `${nombre} ${apellido}`, phone: telefono, email: mail}
        orden.total = cartPrice
        orden.items = cart.map(cartItem => {
            const id = cartItem.item.id;
            const name = cartItem.item.name;
            const price = cartItem.item.price * cartItem.quantity;
            const quantity = cartItem.quantity;
            return {id,name,price,quantity}})
        orders(orden).then(({id})=>{setOrder(id)})
                        .catch( err => {console.log(err)})
                            .finally(()=>{clear();setPaid(true); setLoading(false)})
        ItemsToUpdate()
    }
    if(loading) return <Loading />
    if(finishBuy) return (
        (!paid) ? (<CartFinishBuy generateOrder={generateOrder} user={user} setUser={setUser} />) : (<CartFinishPaid order={order}/>)
    )
    return(
        (cartLength !== 0) ? (<CartItemListContainer setFinishBuy={setFinishBuy} finishBuy={finishBuy} />) : (<CartItemContainerEmpty />)
    )
}
export default Cart;