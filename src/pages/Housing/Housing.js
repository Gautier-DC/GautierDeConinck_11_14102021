import { Component } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";
import Profil from "../../components/Profil/Profil";
import Collapse from "../../components/Collapse/Collapse";
import styles from './Housing.module.css';
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
            <main className={styles.housing}>
                {matchedHousing.pictures ? <Carrousel pictures={matchedHousing.pictures} /> : null}
                <section className={styles.global}>
                    <div className={styles.mainInfo}>
                        <h1>{matchedHousing.title}</h1>
                        <h2>{matchedHousing.location}</h2>
                        {matchedHousing.tags ? <Tags tags={matchedHousing.tags} /> : null}
                    </div>
                    <div className={styles.subInfo}>
                        <Rating rating={matchedHousing.rating}/>
                        {matchedHousing.host ? <Profil name={matchedHousing.host.name} picture={matchedHousing.host.picture}/> : null}
                    </div>
                </section>
                <section className={styles.details}>
                    <Collapse btnTitle="Descriptions" description={matchedHousing.description}/>
                    <Collapse btnTitle="Équipements" equipments={matchedHousing.equipments}/>
                </section>
            </main>
        )
    }
}

const HousingWithRouter = withRouter(Housing)

export default HousingWithRouter