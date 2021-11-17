import { Component } from "react";
import styles from './Card.module.css'
import { Link } from 'react-router-dom';


class Card extends Component {

    render(){
        const {id,cover,title} = this.props
        return (
            <Link to={"/housing/" + id}>
                <article className={styles.card}>
                        <img src={cover} alt={title}/>
                        <h2>{title}</h2>
                </article>
            </Link>
        )
    }
}

export default Card