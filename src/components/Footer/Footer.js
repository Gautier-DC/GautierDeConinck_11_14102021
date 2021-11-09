import { Component } from "react";
import whiteLogo from "../../assets/logo-white.svg"
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'


class Footer extends Component {

    render(){
        return (
            <footer className={styles.footer}>
                <Link to='/'>
                    <img src={whiteLogo} alt='kasa-logo-white' className={styles.footer__logo}/>
                </Link>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        )
    }
}

export default Footer