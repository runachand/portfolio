import React from 'react';
import './Clients.css';

function importAllLogos(r) {
  return r.keys().map(r);
}

const Clients = () => {
  const images = importAllLogos(require.context('../../icons/clientLogos/', false, /\.(png|jpe?g|svg)$/));
  return(
    <div className='clientContainer'>
      {
        images.map((logo) => {
          return (
            <div className='ImageContainer'>
              <img src={logo} alt="logo"/>
            </div>
          );
        })
      }
    </div>
  );
}

export default Clients;