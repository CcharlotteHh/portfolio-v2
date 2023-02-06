import React from 'react';
import "../styles/aboutText.scss";

function AboutText({abth2,abth5,abtp}) {
  return (
    <div className="aboutText">
      <h2>{abth2}</h2>
      <h5>{abth5}</h5>
      <p>{abtp}</p>

    </div>
  )
}

export default AboutText
