import React from 'react';
import './About.css';
import InstaLogo from '../../icons/Instagram-Logo.wine.svg';
import LinkedInLogo from '../../icons/LinkedIn-Icon-Logo.wine.svg';
import FbLogo from '../../icons/Facebook-f_Logo-White-Logo.wine.svg';
import YTLogo from '../../icons/YouTube-Icon-Full-Color-Logo.wine.svg';
import FiverrLogo from '../../icons/fiverr-1.svg';
import {
  instagramLink,
  facebookLink,
  youtubeLink,
  linkedinLink,
  fiverrLink
} from '../../constants';
import profilePic from "../../runa_portfolio.jpg";

const About = () => {
  return(
    <div className='aboutContainer' style={{ width: '100%' }}>
      <div className='picWrapper'>
        <div className='profilePicture' >
          <img src={profilePic} alt="profilepic"/>
        </div>
        <div style={{
          fontSize: '40px',
          fontWeight: 'bolder',
          fontFamily: 'cursive',
          color: 'aqua'
        }}>Runa Chand</div>
        <div style={{
          fontSize: '25px',
          fontWeight: 'bolder',
          width: '75%',
          textAlign: 'center',
          marginTop: '3%',
          marginBottom: '3%',
          color: "#75f78c"
          }}>Indian Voiceover and Dubbing Artist</div>
        <div style={{ fontSize: '18px', fontWeight: 'bolder' }}>Hindi, Oriya (Odia), English</div>
        <div style={{ fontSize: '18px', fontWeight: 'bolder' }}>Adult Female and Kids Voice</div>
      </div>
      <div className='socialMediaButtonGroup'>
        <a target='_blank' href={instagramLink} rel="noreferrer">
          <div className='socialMediaButton' ><img alt='insta' src={InstaLogo} />Follow me on Instagram</div>
        </a>
        <a target='_blank' href={facebookLink} rel="noreferrer">
          <div className='socialMediaButton' ><img alt='fb' src={FbLogo} />Follow me on Facebook</div>
        </a>
        <a target='_blank' href={youtubeLink} rel="noreferrer">
          <div className='socialMediaButton' ><img alt='yt' src={YTLogo} />Watch my YouTube Videos</div>
        </a>
        <a target='_blank' href={fiverrLink} rel="noreferrer">
          <div className='socialMediaButton' ><img alt='fiverr' style={{ marginRight: '10px' }} src={FiverrLogo} />
          Find my gigs at Fiverr</div>
        </a>
        <a target='_blank' href={linkedinLink} rel="noreferrer">
          <div className='socialMediaButton' ><img alt='linkedin' src={LinkedInLogo}/>Connect with me on LinkedIn</div>
        </a>
      </div>
    </div>
  );
}

export default About;
