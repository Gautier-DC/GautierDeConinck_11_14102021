import { Component } from "react";
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom'

import styles from './Header.module.css'


class Header extends Component {

    render(){
        return (
            <header className={styles.header}>
                <Link to='/'>
                    <img src={logo} alt='kasa-logo' className={styles.header__logo}/>
                </Link>
                <nav className={styles.header__nav}>
                    <Link to='/'>ACCUEIL</Link>
                    <Link to='/about'>A PROPOS</Link>
                </nav>
            </header>
        )
    }
}

export default Header