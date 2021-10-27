import { Component } from "react";
import Banner from "../components/Banner/Banner.js";
import Card from "../components/Card/Card.js";
import style from './Home.module.css'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    async componentDidMount() {
        try {
            // const response = await fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
            const response = await fetch('logementsData.json')
            const json = await response.json()
            this.setState({ data:json })
        } catch(error) {
            console.log(error);
        }
    }

    render(){
        return (
            <main>
                <Banner />
                <div className={style.container}>
                    {this.state.data.map(el => (
                        <Card title={el.title} alt={el.title} cover={el.cover} key={el.id}/>
                    ))}
                </div>
            </main>
        )
    }
}

export default Home