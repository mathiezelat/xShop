import {getFirestore} from '../firebase'

const getItems = (category)=>{
    const db = getFirestore();
    const itemsCollection = db.collection('items');
    const filter = category ? itemsCollection.where('category', '==', category).limit(20) : itemsCollection.limit(20);
    const promise = filter.get();
    return promise;
}

export default getItems;