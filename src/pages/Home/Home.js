import { Component } from "react";
import Banner from "../../components/Banner/Banner.js";
import Card from "../../components/Card/Card.js";
import styles from './Home.module.css';
import homeBanner from "../../assets/home_banner_1240x223.png"


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    async componentDidMount() {
        try {
            const response = await fetch('../../../logementsData.json')
            console.log("xxxxx", response);
            const json = await response.json()
            this.setState({ data:json })
        } catch(error) {
            console.log(error);
        }
    }

    render(){
        return (
            <main>
                <Banner src={homeBanner} alt='littoral rocheux et argileux'/>
                <div className={styles.container}>
                    {this.state.data.map(el => (
                        <Card title={el.title} alt={el.title} cover={el.cover} key={el.title + el.id} id={el.id}/>
                    ))}
                </div>
            </main>
        )
    }
}

export default Home