import { Component } from "react";
import style from './Rating.module.css'
import Star from "../Star/Star";

class Rating extends Component {

    //Create the Rating section : create an array of 5 objects filled with grey stars and scale with rating section of the housing
    render(){
        const {rating} = this.props;
        return(
            <div ClassName={style.rating}>
                {[...Array(5)].map((element, index) => (
                    <Star isRated={index + 1 <= rating} />
                ))}
            </div>
        )
    }
    
}

export default Rating