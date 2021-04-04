import data from "./data";

const getItemsDetail = (id)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let product = data.find(product => parseInt(product.id) === parseInt(id))
            if(product){
                resolve(product)
            } else {
                reject('El producto no existe');
            }
        }, 1000);
    })
}

export default getItemsDetail;