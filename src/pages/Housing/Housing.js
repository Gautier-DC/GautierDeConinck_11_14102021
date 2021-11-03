import { Component } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import style from './Housing.module.css'
import { withRouter } from "react-router";

class Housing extends Component {

    constructor(props) {
        super(props);
        this.state = { matchedHousing:{} }
    }

    
    async componentDidMount() {
        try {
            const {match} = this.props;
            const resquestedHousing = match.params.housingId
            const response = await fetch('../../../logementsData.json')
            if (response.ok) {
                const allHousings = await response.json()
                this.setState({matchedHousing:allHousings.find(housing => housing.id === resquestedHousing)})
            }
        } catch(error) {
            console.log(error);
        }
    }
    
    render(){
        const {matchedHousing} = this.state;
        console.log('from housing', matchedHousing.pictures)
        return (
            <main className={style.housing}>
                {matchedHousing.pictures ? <Carrousel pictures={matchedHousing.pictures} /> : null}
                <h1>{matchedHousing.title}</h1>
                <h2>{matchedHousing.location}</h2>
            </main>
        )
    }
}

const HousingWithRouter = withRouter(Housing)

export default HousingWithRouter