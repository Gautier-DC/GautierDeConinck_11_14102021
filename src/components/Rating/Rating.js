import { Component } from "react";
import styles from './Rating.module.css'
import Star from "../Star/Star";

class Rating extends Component {

    //Create the Rating section : create an array of 5 objects filled with grey stars and scale with rating section of the housing
    render(){
        const {rating} = this.props;
        return(
            <div className={styles.rating}>
                {[...Array(5)].map((element, index) => (
                    <Star isRated={index + 1 <= rating} key={'star-' + index}/>
                ))}
            </div>
        )
    }
    
}

export default Rating