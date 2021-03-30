import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";
import Error404 from "../Error404";
import { useParams } from 'react-router-dom';
import { Loading } from "../Loading";
import getItemsDetail from "../../services/getItemsDetail";


const ItemDetailContainer = ()=>{
    const [item, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {itemId} = useParams()
    useEffect(() => {
        setLoading(true);
        getItemsDetail(itemId).then((respuesta)=>{
            setItems(respuesta)
            setLoading(false);
        }
        );
        return ()=>{
            setItems([])
        };
    }, [itemId])
    if (loading) return <Loading/>
    return(
        <div>
            {(item[0]) ? <ItemDetail item={item[0]}/> : <Error404/> }
        </div>
    )
}

export default ItemDetailContainer;