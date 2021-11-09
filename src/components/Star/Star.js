import { Component } from "react";
import styles from './Star.module.css'
import { ReactComponent as GreyStar } from '../../assets/star_rate_grey-24px.svg'
import { ReactComponent as PinkStar } from '../../assets/star_rate_pink-24px.svg'

class Star extends Component {

    //Define the color of the star thanks to the isRated props
    render(){
        const {isRated} = this.props;
        return(
            isRated ? <PinkStar className={styles.star}/> : <GreyStar className={styles.star}/>
        )
    }
    
}

export default Star