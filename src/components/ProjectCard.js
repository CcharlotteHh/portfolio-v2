import React from "react";

function ProjectCard({ title, cardp,cardBtnTxt }) {
  return (
    <div className="row">
      {<h2>{title}</h2>}
      {<p>{cardp}</p>}
      {<a href="https://github.com/CcharlotteHh/webshopjustcss">{cardBtnTxt}</a>}
   
    </div>
  );
}

export default ProjectCard;
