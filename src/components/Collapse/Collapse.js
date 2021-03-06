import { Component } from "react";
import styles from './Collapse.module.css'
import {ReactComponent as Arrow} from '../../assets/arrow.svg'

class Collapse extends Component {

    constructor(props){
        super(props)
        this.state={isOpen:false}
    }

    toggleMenu(e){
        e.preventDefault();
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }));
    }

    //Create dropdown button
    render(){
        const {btnTitle, equipments, description} = this.props;
        const {isOpen} = this.state;
        return(
            <div className={styles.collapse}>
                <button className={styles.btn} onClick={(e)=>this.toggleMenu(e)}>
                    {btnTitle}
                    <Arrow className={`${styles.arrow} ${isOpen ? `${styles.active}` :""}`}/>
                </button>
                <div className={`${styles.dropdownMenu} ${isOpen ? `${styles.active}` :""}`}>
                    {equipments ? 
                        <ul>
                            {equipments.map((equipment, index) => (
                                <li className={styles.item} key={index}>
                                    {equipment}
                                </li>
                            ))}
                        </ul>
                    : <p>{description}</p>}
                </div>
            </div>
        )
    }

}

export default Collapse