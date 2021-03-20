import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";

const infoItems = [
    {
        id: 1,
        name: "Apple MacBook Pro",
        price: 300000,
        desc: "Es un producto de apple",
        img: "https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2019/12/macbookpro.png"
    },
    {
        id: 2,
        name: "iMac",
        price: 400000,
        desc: "Es un un iMac 27",
        img: "https://www.classphoto.es/blog/wp-content/uploads/2015/11/imac__vector__by_thegoldenbox-d6fjv1d.png"
    },
    {
        id: 3,
        name: "AppleWatch",
        price: 60000,
        desc: "Es un Apple Watch Series 5",
        img: "https://cdn.tmobile.com/content/dam/t-mobile/en-p/internet-devices/apple/Apple-Watch-Series-6-44mm/Space-Gray-Aluminum-Black/Apple-Watch-Series-6-44mm-Space-Gray-Aluminum-Black-frontimage.png"
    },
    {
        id: 4,
        name: "iPhone 12 Pro Max",
        price: 340000,
        desc: "Es un iPhone 12 de 512 GB",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-graphite-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021658000"
    }
]
function getItems(item){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(infoItems[item])
        }, 2000);
    })
}
const ItemDetailContainer = ({item})=>{
    const [items, setItems] = useState([]);
    useEffect(() => {
        const prom = getItems(item)
        prom.then((res)=>{
            setItems(res)
        }
        )
    })
    return(
        <div>
            <ItemDetail item={items}/>
        </div>
    )
}

export default ItemDetailContainer;