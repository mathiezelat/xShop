import React from "react";
import './ItemListContainer.scss'
import Card from '../Card'

const ItemListContainer = (props)=> {
    return (
        <div className="container-items-list">
        <h2>{props.name}</h2>
        <div className="item-list-container">
        <Card img="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2019/12/macbookpro.png" name="Producto Apple" desc="Es un producto de Apple de prueba" />
        <Card img="https://www.classphoto.es/blog/wp-content/uploads/2015/11/imac__vector__by_thegoldenbox-d6fjv1d.png" name="Producto Apple 2" desc="Es un producto de Apple de prueba 2" />
        <Card img="https://cdn.tmobile.com/content/dam/t-mobile/en-p/internet-devices/apple/Apple-Watch-Series-6-44mm/Space-Gray-Aluminum-Black/Apple-Watch-Series-6-44mm-Space-Gray-Aluminum-Black-frontimage.png" name="Producto Apple 3" desc="Es un producto de Apple de prueba 3" />
        <Card img="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-graphite-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021658000" name="Producto Apple 4" desc="Es un producto de Apple de prueba 4" />
        </div>
        </div>
    )
}

export default ItemListContainer;