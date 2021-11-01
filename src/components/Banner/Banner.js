import { Component } from "react";
import style from "./Banner.module.css"

class Banner extends Component {

    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        return (
            <div className={style.banner}>
                <img src={this.props.src} alt={this.props.alt} />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        )
    }
}

export default Banner