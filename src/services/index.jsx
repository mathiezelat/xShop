import {getFirestore} from '../firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'

export const getItems = (category)=>{
    const db = getFirestore();
    const itemsCollection = db.collection('items');
    const filter = category ? itemsCollection.where('category', '==', category).limit(20) : itemsCollection.limit(20);
    const promise = filter.get();
    return promise;
}

export const getItem = (id)=>{
    const db = getFirestore();
    const itemsCollection = db.collection('items');
    const item = itemsCollection.doc(id);
    return item.get();
}
export const createOrder = (orden)=>{
    const db = getFirestore();
    const orders = db.collection("orders")
    return orders.add(orden)
}

export const itemsToUpdate = (cart)=>{
    const db = getFirestore();
    const itemsToUpdate = db.collection('items').where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(i => i.item.id))
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