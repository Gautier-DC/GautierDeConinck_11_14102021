import { Component } from "react";
import style from './Profil.module.css'

class Profil extends Component {
    
    //Create the Rating section : create an array of 5 objects filled with grey stars and scale with rating section of the housing
    render(){
        const {name, picture} = this.props;
        const split = name.indexOf(" ")
        const firstName = name.slice(0, split);
        const lastName = name.slice(split);
        return(
            <div className={style.profil}>
                <p>{firstName}<br />{lastName}</p>
                <img src={picture} alt={name}/>
            </div>
        )
    }
}

export default Profil