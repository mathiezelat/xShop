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
import CartItemContainerEmpty from '../CartItemContainerEmpty';

const onClickUp = () => {
    window.scrollTo(0,0)
}

const Cart = ()=>{
    const [loading, setLoading] = useState(false)
    const [finishBuy, setFinishBuy] = useState(false)
    const [paid, setPaid] = useState(false)
    const [order, setOrder] = useState(null)
    const [nombre, setNombre] = useState(null)
    const [apellido, setApellido] = useState(null)
    const [telefono, setTelefono] = useState(null)
    const [mail, setMail] = useState(null)

    const {cart,clear,cartLength,cartPrice} = useContext(CartContext);
    useEffect(()=>{
        return(()=>{
            onClickUp()
            setLoading(true)
        })
    },[])
    const generateOrder = ()=>{
        setLoading(true)
        const db = getFirestore();
        const orders = db.collection("orders")
        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date())
        orden.buyer = {name: `${nombre} ${apellido}`, phone: telefono, email: mail}
        orden.total = cartPrice
        orden.items = cart.map(cartItem => {
            const id = cartItem.item.id;
            const name = cartItem.item.name;
            const price = cartItem.item.price * cartItem.quantity;
            const quantity = cartItem.quantity;
            return {id,name,price,quantity}
        })
        orders.add(orden)
        .then(({id})=>{setOrder(id)})
        .catch( err => {console.log(err)})
        .finally(()=>{clear();setPaid(true); setLoading(false)})
        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cart.map(i => i.item.id)
        )
        const batch = db.batch()
        itemsToUpdate.get().then(collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref,{
                    stock: docSnapshot.data().stock - cart.find(item => item.item.id === docSnapshot.id).quantity,
                    vendidos: docSnapshot.data().vendidos + cart.find(item => item.item.id === docSnapshot.id).quantity
                })
            })
            batch.commit()
        })
    }
    if(loading) return <Loading />
    if(finishBuy) return (
        (!paid) ? (<CartFinishBuy generateOrder={generateOrder} nombre={nombre} apellido={apellido} telefono={telefono} mail={mail} setNombre={setNombre} setApellido={setApellido} setTelefono={setTelefono} setMail={setMail}/>) : (<CartFinishPaid order={order}/>)
    )
    return(
        (cartLength !== 0) ? (<CartItemListContainer setFinishBuy={setFinishBuy} finishBuy={finishBuy} />) : (<CartItemContainerEmpty />)
    )
}
export default Cart;