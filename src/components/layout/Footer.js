import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

import style from './Footer.module.css'

function Footer() {
    return(
        <footer className={style.footer}>
            <ul className={style.social_list}>
                <li>
                    <FaWhatsapp />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <HiOutlineMail />
                </li>
            </ul>
        </footer>
    )
}

export default Footer