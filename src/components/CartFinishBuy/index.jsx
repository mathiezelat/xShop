
import './CartFinishBuy.scss'
const CartFinishBuy = ({generateOrder, user, setUser})=>{
    const {nombre, apellido, telefono, mail} = user;
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
                <p>Mail de contacto:</p>
                <input type="email" value={mail} id="email" required onChange={(mail)=>setUser({...user, mail:mail.target.value})}/>
            </form>
        </div>
        <div className="finish-buy-end">
            <button disabled={!nombre || !apellido || !telefono || !mail} type="submit" form="form-finish-buy" className="btn-finish-buy">Finalizar compra</button>
        </div>
    </div>
</div>)}

export default CartFinishBuy;