import React, { Fragment } from 'react';
import './App.css';
import { useState } from 'react';
import About from './components/About';
import Work from './components/Work';
import Clients from './components/Clients/Clients';
import Testimonials from './components/Testimonials';

import micImg from './icons/micMobile.jpg'
import Samples from './components/Samples';

import InstaLogo from './icons/Instagram-Logo.wine.svg';
import LinkedInLogo from './icons/LinkedIn-Icon-Logo.wine.svg';
import FbLogo from './icons/Facebook-f_Logo-White-Logo.wine.svg';
import YTLogo from './icons/YouTube-Icon-Full-Color-Logo.wine.svg';
import FiverrLogo from './icons/fiverr-1.svg';

import {
  instagramLink,
  facebookLink,
  youtubeLink,
  linkedinLink,
  fiverrLink
} from './constants';

const App = () => {
  const [currentTab, setCurrentTab] = useState('About');

  return (
    <div className="App" style={{ backgroundImage: `url(${micImg})`, backgroundPosition: 'right' }}>
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
            style={{ backgroundColor: currentTab === 'Sample' ? 'purple' : '', color: 'white' }}
            onClick={() => setCurrentTab('Sample')}>
            Sample</div>
          <div
            className='headerItem'
            style={{ backgroundColor: currentTab === 'Contact' ? 'purple' : '', color: 'white' }}
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
            <div className='socialMediaButtonGroup'>
              <a target='_blank' href={instagramLink} rel="noreferrer">
                <div className='socialMediaButton' ><img alt='insta' src={InstaLogo} /></div>
              </a>
              <a target='_blank' href={facebookLink} rel="noreferrer">
                <div className='socialMediaButton' ><img alt='fb' src={FbLogo} /></div>
              </a>
              <a target='_blank' href={youtubeLink} rel="noreferrer">
                <div className='socialMediaButton' ><img alt='yt' src={YTLogo} /></div>
              </a>
              <a target='_blank' href={fiverrLink} rel="noreferrer">
                <div className='socialMediaButton' ><img alt='fiverr' style={{ marginRight: '10px' }} src={FiverrLogo} /></div>
              </a>
              <a target='_blank' href={linkedinLink} rel="noreferrer">
                <div className='socialMediaButton' ><img alt='linkedin' src={LinkedInLogo} /></div>
              </a>
            </div>
            <div className='audioContainer' style={{ textAlign: 'center' }}>
              <br />
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
