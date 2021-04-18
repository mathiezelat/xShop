import { Link } from "react-router-dom";
import './CartFinishPaid.scss'
const CartFinishPaid = ({order})=>{
        return(
        <div className="container-cart">
        <div className="cart-finish-buy">
            <div className="cart-finish-paid">
                <h1>¡Compra Realizada!</h1>
                <div className="cart-finish-order">
                <h2>Número de orden generado</h2>
                <h3>{order}</h3>
                <p>Guarda tu número de orden</p>
                </div>
                <Link to='/' className="btn-volver-inicio">Volver a Inicio</Link>
            </div>
        </div>
    </div>)
}
export default CartFinishPaid;