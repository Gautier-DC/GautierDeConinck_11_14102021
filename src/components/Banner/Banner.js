import { Component } from "react";
import homeBanner from "../../assets/home_banner_1240x223.png"
import style from "./Banner.module.css"

class Banner extends Component {

    render(){
        return (
            <div className={style.banner}>
                <img src={homeBanner} alt='littoral rocheux et argileux' />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        )
    }
}

export default Banner