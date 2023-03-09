import React from "react";
import "../styles/experience.scss";
import php from "./img/php.png";
import sass from "./img/sass.png";
import react from "./img/react.png";
import html_etc from "./img/html_etc.png";

function Experience() {
  return (
    <section className="experience">
      
      <div className="experienceBox">
        <h2>I have experience with</h2>
        <div className="imgContainer">
          <figure>
            <img src={php} alt="php" />
          </figure>
          <figure>
            {" "}
            <img src={sass} alt="php" />
          </figure>
          <figure>
            <img src={react} alt="php" />
          </figure>
          <figure>
            <img src={html_etc} alt="php" />
          </figure>
        </div>
      </div>
      <div className="experienceBox">
      <h2>New subjects I am learning about</h2>
        <div className="imgContainer">
          <figure>
            <img src={php} alt="php" />
          </figure>
          <figure>
            {" "}
            <img src={sass} alt="php" />
          </figure>
          <figure>
            <img src={react} alt="php" />
          </figure>
          <figure>
            <img src={html_etc} alt="php" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Experience;
