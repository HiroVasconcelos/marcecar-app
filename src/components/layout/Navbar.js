import {Link} from 'react-router-dom'

import Container from './Container'

import style from './Navbar.module.css'
import logo from '../../img/marcecar_logo2.png'

function Navbar() {
    return(
        <nav className={style.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="marcecar" />
                </Link>
                <ul className={style.list}>
                    <li class={style.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={style.item}>
                        <Link to="/servicos">Serviços</Link>
                    </li>
                    <li className={style.item}>
                        <Link to="/nossos-trabalhos">Nossos Trabalhos</Link>
                    </li>
                    <li className={style.item}>
                        <Link to="/quem-somos">Quem Somos</Link>
                    </li>
                    <li className={style.item}>
                        <Link to="/contatos">Contatos</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar