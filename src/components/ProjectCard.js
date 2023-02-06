import React from "react";
import eevee from './eevee.png';
import '../styles/projectCard.scss';

function ProjectCard({ title, cardp,cardBtnTxt }) {
  return (
    
    <div className="projectCard">
    <figure className="projectImg">
      <img src={eevee} alt="projectimg" />
    </figure>
    <div className="desc">
      {<h2>{title}</h2>}
      {<p>{cardp}</p>}
      {<a href="https://github.com/CcharlotteHh/webshopjustcss">{cardBtnTxt}</a>}
   </div>
    </div>

  );
}

export default ProjectCard;
