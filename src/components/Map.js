import React from 'react';
import "../styles/map.scss";

function Map() {
  return (
    <div className="map">
        <iframe title='map' className='iframe'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.1476182922993!2d5.104056215791017!3d52.07704257973276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6658b39d11917%3A0xc4aaed9051c276c!2sGrafisch%20Lyceum%20Utrecht!5e0!3m2!1snl!2snl!4v1668588707229!5m2!1snl!2snl"
          loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
  )
}

export default Map
