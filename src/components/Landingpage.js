import React from 'react';
import Typed from 'react-typed';
import "../styles/landingpage.scss";

function Landingpage() {
  

  return (
   <section className='landingpage'>
<div className='animated-typing'>
  <Typed
  strings={[
    'Charlotte',
    'Hage'
  ]}
  typeSpeed={150}
  backSpeed={150}
  loop
  
  />
</div>
  </section>
  )
}

export default Landingpage
