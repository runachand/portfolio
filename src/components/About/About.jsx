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
import Samples from '../Samples';

const About = () => {

  return (
    <div className='aboutContainer' style={{ width: '100%' }}>
      <div className='picWrapper'>
        <div className='profilePicture' >
          <img src={profilePic} alt="profilepic" />
        </div>
        <div style={{
          fontSize: '40px',
          fontWeight: 'bold',
          color: 'white'
        }}>Runa Chand</div>
        <div style={{
          fontSize: '25px',
          fontWeight: '500',
          width: '75%',
          textAlign: 'center',
          marginTop: '3%',
          marginBottom: '3%',
          color: "white"
        }}>Indian Voiceover and Dubbing Artist</div>
        <div style={{ fontWeight: '300', color: 'white', fontSize: '18px' }}>Hindi, Oriya (Odia), English</div>
        <div style={{ fontWeight: '300', color: 'white', fontSize: '18px' }}>Adult Female and Kids Voice</div>
        <div style={{ fontWeight: '300', color: 'white', padding: '20px', textAlign: 'justify' }}>
          Versatile and experienced voice artist who has completed over 500 projects with all happy clients from 9+ countries all over the world. Feel free to scroll through the profile and get in touch if you like to have my voice for your upcoming projects.
        </div>
      </div>
      <div className='rightSideDesktopView'>
        <Samples />
        <div style={{ height: '1px', backgroundColor: 'gray', width: '90%', marginLeft: '5%' }}></div>
        <div style={{ height: '20px' }}></div>
        
        <div style={{ width: '100%', color: 'white', textAlign: 'center' }}>runachand.rc@gmail.com</div>
        <div style={{ width: '100%', color: 'white', textAlign: 'center' }}>+91-9776201084</div>
        
        <div style={{ height: '20px' }}></div>
        <div style={{ height: '1px', backgroundColor: 'gray', width: '90%', marginLeft: '5%' }}></div>
        <div style={{ height: '20px' }}></div>
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
      </div>
      <div style={{ height: '50px' }}></div>

    </div>
  );
}

export default About;
