
import "../styles/projectcontainer.scss";

import Landingpage from "../components/Landingpage";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="home">
 
       <Landingpage/>
      
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
    </div>
  );
}
