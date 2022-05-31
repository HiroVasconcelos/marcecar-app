import { Link } from 'react-router-dom'

import style from './Navbar.module.css'
import logo from '../../img/marcecar_logo2.png'

function Navbar() {
    return(
        <nav className={`${style.navbar}`}>
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
        </nav>
    )
}

// class MobileNavbar {
//     constructor(mobileMenu, list, link) {
//         this.mobileMenu = document.querySelector(mobileMenu);
//         this.list = document.querySelector(list);
//         this.link = document.querySelector(link);
//         this.activeClass = "active";
//     }

//     addClickEvent() {
//         this.mobileMenu.addEventListener("click", () => console.log("Hey"));
//     } 

//     init() {
//         if (this.mobileMenu) {
//             this.addClickEvent();
//         }
//         return this;
//     }
// }

// const mobileNavbar = new MobileNavbar(
//     ".mobileMenu",
//     ".list",
//     ".list li",
// );
// mobileNavbar.init();

export default Navbar
