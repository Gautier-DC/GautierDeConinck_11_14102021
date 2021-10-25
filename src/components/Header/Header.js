import { Component } from "react";
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom'
import style from './Header.module.css'


class Header extends Component {

    render(){
        return (
            <header className={style.header}>
                <Link to='/'>
                    <img src={logo} alt='kasa-logo' className={style.header__logo}/>
                </Link>
                <nav className={style.header__nav}>
                    <Link to='/'>ACCUEIL</Link>
                    <Link to='/'>A PROPOS</Link>
                </nav>
            </header>
        )
    }
}

export default Header