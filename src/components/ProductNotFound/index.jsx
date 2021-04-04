import './ProductNotFound.scss';


const ProductNotFound = ({productNotFound})=>{
    return(
        <div className="product-not-found-container">
            <h1>Error 404</h1>
            <p>{productNotFound}</p>
        </div>
    )
}
export default ProductNotFound;