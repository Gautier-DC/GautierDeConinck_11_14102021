import { Component } from "react";
import styles from './Carrousel.module.css'
import {ReactComponent as Arrow} from '../../assets/arrow.svg'


class Carrousel extends Component {

    constructor(props){
        super(props)
        this.state={ activeIndex: 0}
    }

    prevSlide(e) {
        e.preventDefault();
        let index = this.state.activeIndex;
        let {pictures} = this.props;
        let picLength = pictures.length - 1;
        if(index < 1) {
            //index = picLength;
            this.setState({activeIndex: picLength})
        } else {
            //-- index;
            this.setState({activeIndex: index - 1})
        }
    }

    nextSlide(e) {
        e.preventDefault();
        let index = this.state.activeIndex;
        let {pictures} = this.props;
        let picLength = pictures.length;
        if(index === picLength - 1) {
           // index = 0;
            this.setState({activeIndex: 0})
        } else {
          //  ++ index;
            this.setState({activeIndex: index + 1})
        } 
    }


    
    render(){
        const {pictures} = this.props;
        return (
            <section className={styles.carrousel}>
                {pictures.map((picture, index) => {
                    return(
                        <img src={picture} key={index} alt="" style={
                            {display: this.state.activeIndex === index ? null : "none"
                        }} />
                    )
                })}
                { pictures.length === 1 ? null : <>
                    <button className={styles.previous} onClick={(e) => this.prevSlide(e)}>
                        <Arrow className='previous'/>
                    </button>
                    <button className={styles.next} onClick={(e) => this.nextSlide(e)}>
                        <Arrow className='next' />
                    </button></>
                }
            </section>
        );
    }
}

export default Carrousel