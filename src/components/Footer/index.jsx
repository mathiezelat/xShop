import './Footer.scss';

const Footer = () =>{
    return(
        <footer>
            <h3>xShop - 2021 &copy;</h3>
            <div className="footer-container">
                <div>
                    <div>
                    <h4>Navegación</h4>
                    <div>
                        <ul>
                            <li>Home</li>
                            <li>Categorias
                                <ul>
                                    <li>iMac</li>
                                    <li>Macbook</li>
                                    <li>iPhone</li>
                                    <li>Watch</li>
                                </ul>
                            </li>
                            <li>Nosotros</li>
                            <li>Ayuda</li>
                            <li>Carrito</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div>
                    <div>
                    <h4>Contacto</h4>
                    </div>
                </div>
                <div>
                    <div>
                    <h4>Redes</h4>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;