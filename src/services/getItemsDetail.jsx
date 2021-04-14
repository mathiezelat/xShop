import {getFirestore} from '../firebase'

const getItemsDetail = (id)=>{
    const db = getFirestore();
    const itemsCollection = db.collection('items');
    const item = itemsCollection.doc(id);
    return item.get();
}

export default getItemsDetail;