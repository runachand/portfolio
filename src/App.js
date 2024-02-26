import React, { Fragment } from 'react';
import './App.css';
import { useState } from 'react';
import About from './components/About';
import Work from './components/Work';
import Clients from './components/Clients/Clients';
import Testimonials from './components/Testimonials';

import micImg from './icons/micMobile.jpg'
import Samples from './components/Samples';

const App = () => {
  const [currentTab, setCurrentTab] = useState('About');

  return (
    <div className="App" style={{backgroundImage: `url(${micImg})`, backgroundPosition: 'right'}}>
      <div className='header'>
        <div className='headerRow'>
          <div
            className='headerItem'
            style={{ backgroundColor: currentTab === 'About' ? 'purple' : '', color: 'white' }}
            onClick={() => setCurrentTab('About')}>
            About
          </div>
          <div
            className='headerItem headerItemMiddle'
            style={{ backgroundColor: currentTab === 'Work' ? 'purple' : '', color: 'white' }}
            onClick={() => setCurrentTab('Work')}
            >Work
          </div>
          <div
            className='headerItem'
            style={{ backgroundColor: currentTab === 'Clients' ? 'purple' : '', color: 'white' }}
            onClick={() => setCurrentTab('Clients')}
            >Clients
          </div>
        </div>
        <div className='headerRow'>
          <div
            className='headerItem'
            style={{ backgroundColor: currentTab === 'Testimonials' ? 'purple' : '', color: 'white' }}
            onClick={() => setCurrentTab('Testimonials')}>
          Testimonials</div>
          <div
            className='headerItem headerItemMiddle'
            style={{ backgroundColor: currentTab === 'Sample' ? 'purple' : '', color:  'white' }}
            onClick={() => setCurrentTab('Sample')}>
          Sample</div>
          <div
            className='headerItem'
            style={{ backgroundColor: currentTab === 'Contact' ? 'purple' : '', color:  'white' }}
            onClick={() => setCurrentTab('Contact')}>
          Contact Me</div>
        </div>
      </div>
      <div className='body'>
        {currentTab === 'About' && <Fragment><About /></Fragment>}
        {currentTab === 'Work' && <Fragment><Work /></Fragment>}
        {currentTab === 'Clients' && <Fragment><Clients /></Fragment>}
        {currentTab === 'Testimonials' && <Fragment><Testimonials /></Fragment>}
        {currentTab === 'Sample' && <Fragment><Samples /></Fragment>}
        {currentTab === 'Contact' &&
          <Fragment>
            <div className='audioContainer' style={{ textAlign: 'center' }}>
              <br/>
              <div style={{
                fontSize: '24px', margin: '20px 30px', color: 'white'
              }}>Looking for voice artist for your next project?</div>
              <div style={{
                fontSize: '24px', margin: '20px 30px', color: 'white'
              }}>Let's work together.</div>
              <div style={{
                fontSize: '24px', margin: '20px 30px', color: 'white'
              }}>Reach out to me and I will send you my best quote. </div>
              <div style={{
                fontSize: '24px', margin: '20px 30px', color: 'chartreuse'
              }}>Email id: runachand.rc@gmail.com</div>
              <div style={{
                fontSize: '24px', margin: '20px 30px', color: 'chartreuse'
              }}>Phone no: +91-9776201084</div>
            </div>
          </Fragment>
        }

      </div>
    </div>
  );
}

export default App;
