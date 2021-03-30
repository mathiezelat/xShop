import data from "./data";

const getItemsDetail = (id)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(data.filter(i => i.id === parseInt(id)))
        }, 1000);
    })
}

export default getItemsDetail;