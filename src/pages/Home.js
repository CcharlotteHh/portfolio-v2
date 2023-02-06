import "../styles/sections.scss";

import Landingpage from "../components/Landingpage";
import ProjectCard from "../components/ProjectCard";

import AboutFig from "../components/AboutFig";
import AboutText from "../components/AboutText";
import Form from "../components/Form";
import Map from "../components/Map";

export default function Home() {
  return (
    <div className="home">
      <Landingpage />

      <section className="projectContainer">
        <ProjectCard
          title="Webshop Frontend"
          cardp="In dit project heb ik een webshop uitgewerkt. Ik heb dit gedaan met CSS. Je kunt door de
                website heen klikken en de verschillende pagina's bekijken."
          cardBtnTxt="Githublink"
        />
        <ProjectCard
          title="Webshop Frontend"
          cardp="In dit project heb ik een webshop uitgewerkt. Ik heb dit gedaan met CSS. Je kunt door de
                website heen klikken en de verschillende pagina's bekijken."
          cardBtnTxt="Githublink"
        />
        <ProjectCard
          title="Webshop Frontend"
          cardp="In dit project heb ik een webshop uitgewerkt. Ik heb dit gedaan met CSS. Je kunt door de
                website heen klikken en de verschillende pagina's bekijken."
          cardBtnTxt="Githublink"
        />
        <ProjectCard
          title="Webshop Frontend"
          cardp="In dit project heb ik een webshop uitgewerkt. Ik heb dit gedaan met CSS. Je kunt door de
                website heen klikken en de verschillende pagina's bekijken."
          cardBtnTxt="Githublink"
        />
        <ProjectCard
          title="Webshop Frontend"
          cardp="In dit project heb ik een webshop uitgewerkt. Ik heb dit gedaan met CSS. Je kunt door de
                website heen klikken en de verschillende pagina's bekijken."
          cardBtnTxt="Githublink"
        />
      </section>
      <section className="aboutMe">
        <AboutFig></AboutFig>
        <AboutText
          abth2="Over mij"
          abth5="Webdeveloper"
          abtp="Ik ben een Webdevelopment student op het Grafisch Lycuem.
        Ik heb ervaring met het vormgeven van websites met CSS en heb binnen mijn
      opleiding gewerkt met Tailwind css en Bootstrap CSS. Ik heb ook ervaring met PHP en het
    gebruken van databases om data op te slaan en weer te geven op websites.
    Ik kan zelfstandig werken maar heb ook ervaring met het samen maken van projecten met andere webdevelopers.
    Ik vind het leuk om mijn ideeen om te zetten in een product en geinspireerd te worden door anderen."
        ></AboutText>
      </section>

      <section className="contactPage">
        <div className="contactContainer">
        <Form></Form>
        <Map></Map>
        </div>
      </section>
    </div>
  );
}
