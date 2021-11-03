import { Component } from "react";
import style from './Carrousel.module.css'
import {ReactComponent as Arrow} from '../../assets/arrow.svg'


class Carrousel extends Component {

    constructor(props){
        super(props)
        this.state={ activeIndex: 0}
    }

    goToSlide(index) { 
        this.setState({ activeIndex: index });
    }

    prevSlide(e) {
        e.preventDefault();
        let index = this.state.activeIndex;
        let {pictures} = this.props;
        let picLength = pictures.length - 1;
        if(index < 1) {
            index = picLength - 1;
        } else {
            -- index;
        }
        this.setState({activeIndex: index})
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
        //this.setState({activeIndex: index})
    }


    
    render(){
        const {pictures} = this.props;
        console.log('++++', pictures)
        return (
            <section className={style.carrousel}>
                {pictures.map((picture, index) => {
                    return(
                        <img src={picture} key={index} alt="" style={
                            {display: this.state.activeIndex === index ? null : "none"
                        }} />
                    )
                })}
                <button className={style.previous} onClick={(e) => this.prevSlide(e)}>
                    <Arrow className='previous'/>
                </button>
                <button className={style.next} onClick={(e) => this.nextSlide(e)}>
                    <Arrow className='next' />
                </button>
            </section>
        );
    }
}

export default Carrousel