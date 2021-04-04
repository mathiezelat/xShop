import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";
import ProductNotFound from "../ProductNotFound";
import { useParams } from 'react-router-dom';
import { Loading } from "../Loading";
import getItemsDetail from "../../services/getItemsDetail";


const ItemDetailContainer = ()=>{
    const [item, setItems] = useState(false);
    const [loading, setLoading] = useState(true);
    const [productNotFound, setProductNotFound] = useState(false)

    const {itemId} = useParams()
    useEffect(() => {
        setLoading(true);
        getItemsDetail(itemId).then((respuesta)=>{
            setItems(respuesta)
            setLoading(false);
        }
        ).catch(error => {
            setLoading(false);
            setProductNotFound(error);
        });
        return ()=>{
            setItems([])
        };
    }, [itemId])
    if (loading) return <Loading/>
    return(
        <div>
            {(item) ? <ItemDetail item={item}/> : <ProductNotFound productNotFound={productNotFound} /> }
        </div>
    )
}

export default ItemDetailContainer;