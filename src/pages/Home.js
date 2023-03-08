import "../styles/sections.scss";

import Landingpage from "../components/Landingpage";
import ProjectCard from "../components/ProjectCard";

import AboutFig from "../components/AboutFig";
import AboutText from "../components/AboutText";
import Experience from "../components/Experience";
import Form from "../components/Form";
import Map from "../components/Map";

import webFrontend from "../assets/img/frontend.PNG";
import webBackend from "../assets/img/backend.png"
import vnw from "../assets/img/vwn.png";
import zodiac from "../assets/img/zodiac.png";
import product from "../assets/img/eindproduct.jpg";
export default function Home() {
  return (
    <div className="home">
      <Landingpage />

      <section className="projectContainer">
      
        <ProjectCard
        img={webFrontend}
          title="Webshop Frontend"
          cardp="In dit project heb ik een webshop uitgewerkt. Ik heb dit gedaan met CSS. Je kunt door de
                website heen klikken en de verschillende pagina's bekijken."
          link="https://github.com/CcharlotteHh/webshopjustcss"      
          cardBtnTxt="Githublink"
        />
        <ProjectCard
          img={webBackend}
          title="Webshop Backend"
          cardp="In dit project heb ik de Backend van mijn webshop uitgewerkt, ik heb een inlog en registreer pagina gemaakt. Ik heb ook een CRUD gemaakt voor prodcten en categorie.
          Dit is allemaal gekoppeld aan een database."
          cardBtnTxt="Githublink"
        />
        <ProjectCard
          img={vnw}
          title="Vrijwilligershuis"
          cardp="Dit is een groepproject in samenwerking met 2 klasgenoten. We hebben een website gemaakt voor Vrijwilligershuis Nieuwegein.
          Deze website word gebruikt voor het verwerken van donaties en aangeboden hulp aan vluchtelingen uit Oekraïne."
          cardBtnTxt="Githublink"
        />
        <ProjectCard
          img={zodiac}
          title="Starsigns Project"
          cardp="In dit project heb ik een pagina gemaakt waar door sterrenbeelden heen geklikt kan worden. De data hiervoor staat in een JSON bestand."
          cardBtnTxt="Githublink"
        />
        <ProjectCard
          img={product}
          title="Eindproduct"
          cardp="Een online website waar al mijn projecten en opdrachten voor het vak WEB uit het eerste jaar van mijn opleiding online staan weergegeven."
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
      <Experience>

      </Experience>

      <section id="contact" class="contact">
        <div className="contactContainer">
        <Form></Form>
        <Map></Map>
        </div>
      </section>
     
    </div>
  );
}
