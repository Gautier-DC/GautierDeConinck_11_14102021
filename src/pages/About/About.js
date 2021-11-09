import { Component } from "react";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import styles from "./About.module.css";
import aboutBanner from "../../assets/apropos_banner_1240x223.png";

class About extends Component {
  render() {
    const fiabDesc = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
    const respDesc = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const servDesc = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const secuDesc = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien ";
    return (
      <main className={styles.about}>
        <Banner src={aboutBanner} alt="Paysage montagneux" />
        <section className={styles.containerAbout}>
            <Collapse btnTitle="Fiabilité" description={fiabDesc} />
            <Collapse btnTitle="Respect" description={respDesc} />
            <Collapse btnTitle="Service" description={servDesc} />
            <Collapse btnTitle="Sécurité" description={secuDesc} />
        </section>
      </main>
    );
  }
}

export default About;
