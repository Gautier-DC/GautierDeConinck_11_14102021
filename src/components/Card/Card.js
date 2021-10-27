import { Component } from "react";
import style from './Card.module.css'
import { Link } from 'react-router-dom';


class Card extends Component {

    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        return (
            <div className={style.card}>
                <Link
                    to={{
                        pathname: "/logements",
                        search: "?sort=name",
                        hash: "#the-hash",
                        state: { fromDashboard: true }
                    }}
                    />
                    <img src={this.props.cover} alt={this.props.title}/>
                    <h2>{this.props.title}</h2>
            </div>
        )
    }
}

export default Card