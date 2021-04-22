import { Link } from 'react-router-dom';
import './Footer.scss';
import { onClickUp } from '../../utils';
const Footer = () =>{
    return(
        <footer>
            <h6>xShop - 2021 &copy;</h6>
            <div className="footer-container">
                <div>
                    <div>
                    <h4>Navegación</h4>
                    <div>
                        <ul>
                            <li><Link to='/' onClick={onClickUp}>Home</Link></li>
                            <li>Categorias
                                <ul>
                                    <li><Link to='/category/iMac' onClick={onClickUp}>iMac</Link></li>
                                    <li><Link to='/category/MacBook' onClick={onClickUp}>MacBook</Link></li>
                                    <li><Link to='/category/iPad' onClick={onClickUp}>iPad</Link></li>
                                    <li><Link to='/category/iPhone' onClick={onClickUp}>iPhone</Link></li>
                                    <li><Link to='/category/Watch' onClick={onClickUp}>Watch</Link></li>
                                </ul>
                            </li>
                            <li><Link to='/nosotros' onClick={onClickUp}>Nosotros</Link></li>
                            <li><Link to='/ayuda' onClick={onClickUp}>Ayuda</Link></li>
                            <li><Link to='/cart' onClick={onClickUp}>Carrito</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div>
                    <div>
                    <h4>Contacto</h4>
                    <a href="https://www.linkedin.com/in/math%C3%ADas-ezequiel-latr%C3%B3nico/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/icon-linkedin.svg" width="25" alt="Linkedin"/>
                    </a>
                    </div>
                </div>
                <div>
                    <div>
                    <h4>Redes</h4>
                    <a href="https://github.com/mathiezelat/xShop" target="_blank" rel="noopener noreferrer">
                        <img src="/images/github.svg" width="25" alt="GitHub"/>
                    </a>
                    </div>
                </div>
            </div>
            <h5>Mathias Ezequiel Latronico</h5>
            <h6>Hecho con ❤️ </h6>
        </footer>
    )
}

export default Footer;