import React from "react";
import { testimonials } from '../../constants';
import './Testimonials.css';

const Testimonials = () => {
  // const colorGenerator = () => {
  //   let color = 'rgb(';
  //   color += Math.floor(Math.random() * 255).toString() + ',';
  //   // color += Math.floor(Math.random() * 255).toString() + ',';
  //   color += '255,'
  //   color += Math.floor(Math.random() * 255).toString();
  //   return color + ')';
  // }
  return(
    <div className='container'>
      {
        testimonials.map((t, index) => {
          return(
            <div className='tcard'>
              <span style={{ fontSize: '20px', color: 'black' }}>"</span>
              <span style={{ fontSize: '20px', color: 'black' }}>{t.text}</span>
              <span style={{ fontSize: '20px', color: 'black' }}>"</span>
              <div style={{ textAlign: 'right', fontStyle: 'italic' }}>- {t.name}, {t.country}</div>
              <div style={{ textAlign: 'right', fontStyle: 'italic' }}>{t.connection} review</div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Testimonials;