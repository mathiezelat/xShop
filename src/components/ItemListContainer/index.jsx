import React, {useState, useEffect} from "react";
import './ItemListContainer.scss'
import ItemList from '../ItemList'
import { useParams } from 'react-router-dom';
import Error404 from "../Error404";
import { Loading } from "../Loading";
import getItems from "../../services/getItems";


const ItemListContainer = ({name})=> {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState(null);
    const {categoryId} = useParams();
    useEffect( () => {
        setLoading(true)
            getItems(categoryId)
            .then((respuesta)=>{
                setItems(respuesta);
                setLoading(false);
                setTitle(<h2>{name} {categoryId}</h2>);
            })
        return () => {
            setItems([]);
        };
    }, [categoryId, name]);
    if (loading) return <Loading/>
    return (
        <div className="container-items-list">
            {items[0] ? title : null}
            <div className="item-list-container">
            {(items[0]) ?  <ItemList items={items} /> : <Error404 />  }
            </div>
        </div>
    )
}

export default ItemListContainer;