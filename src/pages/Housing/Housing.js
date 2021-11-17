import { Component } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";
import Profil from "../../components/Profil/Profil";
import Collapse from "../../components/Collapse/Collapse";
import styles from './Housing.module.css';
import { withRouter } from "react-router";
import { Redirect } from 'react-router-dom'

class Housing extends Component {

    constructor(props) {
        super(props);
        this.state = { matchedHousing:{}, error:false }
    }

    async componentDidMount() {
        try {
            const {match} = this.props;
            const resquestedHousing = match.params.housingId
            const response = await fetch('../../../logementsData.json')
            if (response.ok) {
                const allHousings = await response.json()
                //Check if there is a housing and if not trigger an error
                const foundHouse = allHousings.find(housing => housing.id === resquestedHousing)
                if(foundHouse){
                    this.setState({matchedHousing:foundHouse})                    
                } else {
                    this.setState({error:true})
                }
            }
        } catch(error) {
            console.log(error);
        }
    }

    render(){
        const {matchedHousing, error} = this.state;
        return (
            //If there is an error redirect to 404
            error === false ?
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
                        <article>
                            <Collapse btnTitle="Descriptions" description={matchedHousing.description}/>
                        </article>
                        <article>
                            <Collapse btnTitle="Équipements" equipments={matchedHousing.equipments}/>
                        </article>
                    </section>
                </main> :
                <Redirect to='/404'/>
        )
    }
}

const HousingWithRouter = withRouter(Housing)

export default HousingWithRouter