import { Component } from "react";
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom'
import './Header.css'


class Header extends Component {

    render(){
        return (
            <header className='header-container'>
                <Link to='/'>
                    <img src={logo} alt='kasa-logo' className='header__logo'/>
                </Link>
                <nav className='header__nav'>
                    <Link to='/'>ACCUEIL</Link>
                    <Link to='/'>A PROPOS</Link>
                </nav>
            </header>
        )
    }
}

export default Header