import { Component } from "react";
import style from './Carrousel.module.css'
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
            <section className={style.carrousel}>
                {pictures.map((picture, index) => {
                    return(
                        <img src={picture} key={index} alt="" style={
                            {display: this.state.activeIndex === index ? null : "none"
                        }} />
                    )
                })}
                { pictures.length === 1 ? null : <>
                    <button className={style.previous} onClick={(e) => this.prevSlide(e)}>
                        <Arrow className='previous'/>
                    </button>
                    <button className={style.next} onClick={(e) => this.nextSlide(e)}>
                        <Arrow className='next' />
                    </button></>
                }
            </section>
        );
    }
}

export default Carrousel