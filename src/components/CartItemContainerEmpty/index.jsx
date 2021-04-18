import { Link } from "react-router-dom";
import './CartItemContainerEmpty.scss';
const CartItemContainerEmpty = ()=>{
    return(
    <div className="container-cart-empty">
    <h1>Tu carrito está vacío</h1>
    <Link to='/' className="btn-volver-inicio">Volver a Inicio</Link>
</div>)
}
export default CartItemContainerEmpty;