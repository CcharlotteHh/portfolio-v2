import React from "react";
import '../styles/projectCard.scss';


function ProjectCard({ img, title, cardp,cardBtnTxt, link  }) {
  return (
    
    <div className="projectCard">
    <figure className="projectImg">
      <img src={img} alt="projectimg" />
    </figure>
    <div className="desc">
      {<h2>{title}</h2>}
      {<p>{cardp}</p>}
      {<a classname="prBtn"href={link}  target="_blank"  rel="noreferrer">{cardBtnTxt}</a>}
   </div>
    </div>

  );
}

export default ProjectCard;
