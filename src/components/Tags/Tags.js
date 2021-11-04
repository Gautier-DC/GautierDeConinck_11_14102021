import { Component } from "react";
import style from './Tags.module.css'

class Tags extends Component {

    render() {
        const {tags} = this.props;
        return(
            <ul>
                {tags.map((tag, index) => <li className={style.tag} key={tag + index}>{tag}</li>)}
            </ul>
        )
    }

}

export default Tags