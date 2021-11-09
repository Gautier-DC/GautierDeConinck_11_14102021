import { Component } from "react";
import styles from './Tags.module.css'

class Tags extends Component {

    render() {
        const {tags} = this.props;
        return(
            <ul>
                {tags.map((tag, index) => <li className={styles.tag} key={tag + index}>{tag}</li>)}
            </ul>
        )
    }

}

export default Tags