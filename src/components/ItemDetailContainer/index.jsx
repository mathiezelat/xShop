import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";
import Error404 from "../Error404";
import { useParams } from 'react-router-dom';

const data = ([
    {
        id: 1,
        name: "Apple MacBook Pro",
        price: 250000,
        desc: "Es un producto de apple",
        img: "https://www.apple.com/v/macbook-pro-13/f/images/specs/mbp_shop__fn4wvksqg5aq_large_2x.png",
        category: "MacBook"
    },
    {
        id: 2,
        name: "Apple MacBook Air",
        price: 170000,
        desc: "Es un producto de apple",
        img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP825/macbookair.png",
        category: "MacBook"
    },
    {
        id: 10,
        name: "iMac",
        price: 400000,
        desc: "Es un iMac 27",
        img: "https://www.classphoto.es/blog/wp-content/uploads/2015/11/imac__vector__by_thegoldenbox-d6fjv1d.png",
        category: "iMac"
    },
    {
        id: 20,
        name: "AppleWatch",
        price: 60000,
        desc: "Es un Apple Watch Series 5",
        img: "https://cdn.tmobile.com/content/dam/t-mobile/en-p/internet-devices/apple/Apple-Watch-Series-6-44mm/Space-Gray-Aluminum-Black/Apple-Watch-Series-6-44mm-Space-Gray-Aluminum-Black-frontimage.png",
        category: "Watch"
    },
    {
        id: 30,
        name: "iPhone 12 Mini",
        price: 200000,
        desc: "Es un iPhone 12 de 512 GB",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-mini-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604343706000",
        category: "iPhone"
    },
    {
        id: 31,
        name: "iPhone 12",
        price: 230000,
        desc: "Es un iPhone 12 de 512 GB",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604343704000",
        category: "iPhone"
    },
    {
        id: 32,
        name: "iPhone 12 Pro",
        price: 260000,
        desc: "Es un iPhone 12 de 512 GB",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000",
        category: "iPhone"
    },
    {
        id: 33,
        name: "iPhone 12 Pro Max",
        price: 290000,
        desc: "Es un iPhone 12 de 512 GB",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-graphite-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021658000",
        category: "iPhone"
    }
])

function getItems(id){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(data.filter(i => i.id === parseInt(id))[0])
        }, 1000);
    })
}
const ItemDetailContainer = ()=>{
    const [item, setItems] = useState([]);
    const {itemId} = useParams()
    useEffect(() => {
        const promesa = getItems(itemId)
        promesa.then((respuesta)=>{
            setItems(respuesta)
        }
        );
        return;
    }, [itemId])
    return(
        <div>
            {item ? <ItemDetail item={item}/> : <Error404 /> }
        </div>
    )
}

export default ItemDetailContainer;