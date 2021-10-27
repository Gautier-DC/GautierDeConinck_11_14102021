import { Component } from "react";
import whiteLogo from "../../assets/logo-white.svg"
import { Link } from 'react-router-dom'
import style from './Footer.module.css'


class Footer extends Component {

    render(){
        return (
            <footer className={style.footer}>
                <Link to='/'>
                    <img src={whiteLogo} alt='kasa-logo-white' className={style.footer__logo}/>
                </Link>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        )
    }
}

export default Footer