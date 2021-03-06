import './CartFinishBuy.scss'
import { Link } from "react-router-dom";
const CartFinishBuy = ({generateOrder, user, setUser, paid, order})=>{
    const {nombre, apellido, telefono, mail, mail2Value} = user;
    if (paid) return (
        <div className="container-cart">
        <div className="cart-finish-buy">
            <div className="cart-finish-paid">
                <h1>¡Compra Realizada!</h1>
                <div className="cart-finish-order">
                <h2>Número de orden generado</h2>
                <h3>{order}</h3>
                <p>Guarda tu número de orden</p>
                <h4>¡Qué disfrutes tu compra!</h4>
                </div>
                <Link to='/' className="btn-volver-inicio">Volver a Inicio</Link>
            </div>
        </div>
    </div>
    )
    return(
    <div className="container-cart">
    <div className="cart-finish-buy">
    <h1>Finalizar compra</h1>
        <div className="form-buy-container">
            <form id="form-finish-buy" onSubmit={e=>{e.preventDefault();generateOrder();}}>
                <p>Nombre:</p>
                <input type="text" value={nombre} id="nombre" minLength="3" maxLength="15" required onChange={(nombre)=>setUser({...user, nombre:nombre.target.value})}/>
                <p>Apellido:</p>
                <input type="text" value={apellido} id="apellido" minLength="3" maxLength="15" required onChange={(apellido)=>setUser({...user, apellido:apellido.target.value})}/>
                <p>Número de teléfono:</p>
                <input type="number" value={telefono} id="numero" min="0" max="9999999999" required onChange={(telefono)=>setUser({...user,telefono:telefono.target.value})}/>
                <p>Ingrese su correo:</p>
                <input type="email" value={mail} id="email" required onChange={(mail)=>setUser({...user, mail:mail.target.value})}/>
                <p>Ingrese su correo nuevamente:</p>
                <input type="email" autoComplete="new-mail" value={mail2Value} id="email2Value" required onChange={(mail2Value)=> setUser({...user, mail2Value:mail2Value.target.value})}/>
            </form>
        </div>
        <div className="finish-buy-end">
            <button disabled={!nombre || !apellido || !telefono || !mail || !mail2Value || !(mail === mail2Value) ? true : false} type="submit" form="form-finish-buy" className="btn-finish-buy">Finalizar compra</button>
        </div>
    </div>
</div>)}

export default CartFinishBuy;