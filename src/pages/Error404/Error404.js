import { Component } from "react";
import styles from './Error404.module.css';
import { Link } from 'react-router-dom';


class Error404 extends Component {

    render(){
        return (
            <main>
                <div className={styles.container}>
                    <h1>404</h1>
                    <p>Oups ! La page que vous demandez n'existe pas</p>
                    <Link to='/'>Retourner sur la page d'accueil</Link>
                </div>
            </main>
        )
    }
}

export default Error404