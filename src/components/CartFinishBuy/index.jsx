
import './CartFinishBuy.scss'
const CartFinishBuy = ({generateOrder, setNombre, setApellido, setTelefono, setMail})=>{
    return(
    <div className="container-cart">
    <div className="cart-finish-buy">
    <h1>Finalizar compra</h1>
        <div className="form-buy-container">
            <form id="form-finish-buy" onSubmit={e=>{e.preventDefault();generateOrder();}}>
                <p>Nombre:</p>
                <input type="text" id="nombre" minLength="3" maxLength="15" required onChange={(nombre)=>setNombre(nombre.target.value)}/>
                <p>Apellido:</p>
                <input type="text" id="apellido" minLength="3" maxLength="15" required onChange={(apellido)=>setApellido(apellido.target.value)}/>
                <p>Número de teléfono:</p>
                <input type="number" id="numero" min="0" max="9999999999" required onChange={(telefono)=>setTelefono(telefono.target.value)}/>
                <p>Mail de contacto:</p>
                <input type="email" id="email" required onChange={(mail)=>setMail(mail.target.value)}/>
            </form>
        </div>
        <div className="finish-buy-end">
            <button type="submit" form="form-finish-buy" className="btn-finish-buy">Finalizar compra</button>
        </div>
    </div>
</div>)}

export default CartFinishBuy;