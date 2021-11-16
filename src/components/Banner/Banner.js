import { Component } from "react";
import styles from "./Banner.module.css"

class Banner extends Component {

    render(){
        const {page, src, alt, title} = this.props;
        return (
            <div className={page === 'home'? `${styles.banner}` : `${styles.abtbanner}`}>
                <img src={src} alt={alt} />
                {page === 'home' && <h1>{title}</h1>}
            </div>
        )
    }
}

export default Banner