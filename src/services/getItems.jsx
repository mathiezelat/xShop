import data from "./data";

const getItems = (category)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(category){
            resolve(data.filter(i => i.category === category));
            } else{
            resolve(data)
            }
            reject('Ocurrio un error inesperado')
        }, 500);
    })
}
export default getItems;