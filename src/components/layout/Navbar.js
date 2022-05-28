import {Link} from 'react-router-dom'

import style from './Navbar.module.css'
// import MobileNavbar from './MobileNavbar'
import logo from '../../img/marcecar_logo2.png'

function Navbar() {
    return(
        <nav className={style.navbar}>
            <Link to="/">
                <img src={logo} alt="marcecar" />
            </Link>
            <div className={style.mobileMenu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className={style.list}>
                <li className={style.item}>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/servicos">Serviços</Link>
                </li>
                <li>
                    <Link to="/nossos-trabalhos">Nossos Trabalhos</Link>
                </li>
                <li>
                    <Link to="/quem-somos">Quem Somos</Link>
                </li>
                <li>
                    <Link to="/contatos">Contatos</Link>
                </li>
            </ul>
            <script src="MobileNavbar.js"></script>
        </nav>
    )
}

export default Navbar
