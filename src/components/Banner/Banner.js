import { Component } from "react";
import styles from "./Banner.module.css"

class Banner extends Component {

    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        const {src, alt, title} = this.props;
        return (
            <div className={styles.banner}>
                <img src={this.props.src} alt={this.props.alt} />
                <h1>{title}</h1>
            </div>
        )
    }
}

export default Banner