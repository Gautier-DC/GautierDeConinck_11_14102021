import { Component } from "react";
import style from './Carrousel.module.css'
import { Link } from 'react-router-dom';


class Carrousel extends Component {

    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        return (
            <div className={style.banner}>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        );
    }
}

export default Carrousel