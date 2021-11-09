import { Component } from "react";
import styles from './Profil.module.css'

class Profil extends Component {
    
    //Create the profil section : picture and name of the owner
    render(){
        const {name, picture} = this.props;
        // split the name field in two
        const split = name.indexOf(" ")
        const firstName = name.slice(0, split);
        const lastName = name.slice(split);
        return(
            <div className={styles.profil}>
                <p>{firstName}<br />{lastName}</p>
                <img src={picture} alt={name}/>
            </div>
        )
    }
}

export default Profil