import React, { Fragment } from 'react';
import './App.css';
import { useState } from 'react';
import About from './components/About';
import Work from './components/Work';
import Clients from './components/Clients/Clients';
import Testimonials from './components/Testimonials';

import ReactPlayer from "react-player";

import EngTVCHershey from './audio/Eng_TVC_Hershey_RunaChand.mp3';
import Engkidcartoon from './audio/Eng_KidAndCartoon_RunaChand.mp3';
import EngkidAdSweetypotamus from './audio/Eng_KidAd_SweetyPotamus.mp3';
import EngTVCslow from './audio/Eng_TVC_SlowCalm_RunaChand.mp3';
import Enggamerole from './audio/Eng_KidGameRole_RunaChand.mp3';
import Enggamead from './audio/Eng_KidGameAdv_RunaChand.mp3';
import EngExplainer from './audio/Eng_Explainer_RunaChand.mp3';
import HindiTVCFunkyy from './audio/Hindi_TVC_Funky_RunaChand.mp3';
import HindiTVCslow from './audio/Hindi_TVC_SlowCalm_RunaChand.mp3';
import Hindikidcartoon from './audio/Hindi_KidAndCartoon_RunaChand.mp3';
import HindiVoiceassistant from './audio/Hindi_VoiceAssistant_RunaChand.mp3';
import Hindiemotional from './audio/Hindi_Emotional_RunaChand.mp3';
import Oriyacommercial from './audio/Oriya_Commercial_RunaChand.mp3';
import OriyaExplainer from './audio/Oriya_Explainer_RunaChand.mp3';
import OriyaDocumentary from './audio/Oriya_Documentary_RunaChand.mp3';
import OriyaKidvoice from './audio/Oriya_KidVoiceSample_RunaChand.mp3';
import OriyaIVR from './audio/Oriya_IVR_RunaChand.mp3';
import OriyaSM from './audio/OriyaSM_Voice+BGM.mp3';

const audioFiles = [
  {fileName: HindiTVCFunkyy, description: "Hindi TVC casual"},
  {fileName: HindiTVCslow, description: "Hindi TVC calm"},
  {fileName: Hindikidcartoon, description: "Hindi Kid Cartoon"},
  {fileName: HindiVoiceassistant, description: "Hindi Voice Assistant"},
  {fileName: Hindiemotional, description: "Hindi Poetry Emotional"},
  {fileName: EngTVCHershey, description: "Eng TVC Hershey"},
  {fileName: Engkidcartoon, description: "Eng Kid Cartoon"},
  {fileName: EngkidAdSweetypotamus, description: "Eng Kid Ad Cartoon"},
  {fileName: EngTVCslow, description: "Eng TVC Calm"},
  {fileName: Enggamerole, description: "Eng Kid Game role"},
  {fileName: Enggamead, description: "Eng Game Ad"},
  {fileName: EngExplainer, description: "Eng Explainer"},
  {fileName: Oriyacommercial, description: "Oriya commercial"},
  {fileName: OriyaExplainer, description: "Oriya Explainer"},
  {fileName: OriyaDocumentary, description: "Oriya Documentary"},
  {fileName: OriyaKidvoice, description: "Oriya Kid voice"},
  {fileName: OriyaIVR, description: "Oriya IVR"},
  {fileName: OriyaSM, description: "Oriya Short Movie"},
  
];

const App = () => {
  const [currentTab, setCurrentTab] = useState('About');

  return (
    <div className="App">
      <div className='header'>
        <div className='headerRow'>
          <div
            className='headerItem'
            style={{ color: currentTab === 'About' ? 'white' : '' }}
            onClick={() => setCurrentTab('About')}>
            About
          </div>
          <div
            className='headerItem headerItemMiddle'
            style={{ color: currentTab === 'Work' ? 'white' : '' }}
            onClick={() => setCurrentTab('Work')}
            >Work
          </div>
          <div
            className='headerItem'
            style={{ color: currentTab === 'Clients' ? 'white' : '' }}
            onClick={() => setCurrentTab('Clients')}
            >Clients
          </div>
        </div>
        <div className='headerRow'>
          <div
            className='headerItem'
            style={{ color: currentTab === 'Testimonials' ? 'white' : '' }}
            onClick={() => setCurrentTab('Testimonials')}>
          Testimonials</div>
          <div
            className='headerItem headerItemMiddle'
            style={{ color: currentTab === 'Sample' ? 'white' : '' }}
            onClick={() => setCurrentTab('Sample')}>
          Sample</div>
          <div
            className='headerItem'
            style={{ color: currentTab === 'Contact' ? 'white' : '' }}
            onClick={() => setCurrentTab('Contact')}>
          Contact</div>
        </div>
      </div>
      <div className='body'>
        {currentTab === 'About' && <Fragment><About /></Fragment>}
        {currentTab === 'Work' && <Fragment><Work /></Fragment>}
        {currentTab === 'Clients' && <Fragment><Clients /></Fragment>}
        {currentTab === 'Testimonials' && <Fragment><Testimonials /></Fragment>}
        {currentTab === 'Sample' &&
          <div className='audioContainer'>
            <br />
            {
              audioFiles.map((file, index) => {
                return(
                  <>
                    <div style={{ textAlign: 'center', fontWeight : 'bolder' }}>{file.description}</div>
                    <div className='audioCard'>
                      <ReactPlayer
                        url={file.fileName}
                        width="100%"
                        height="50px"
                        playing={false}
                        controls={true}
                      />
                    </div>
                    <br />
                    <br />
                  </>
                );
              })
            }
          </div>
        }
        {currentTab === 'Contact' &&
          <Fragment>
            <div className='audioContainer' style={{ textAlign: 'center' }}>
              <br/>
              <div style={{
                fontSize: '24px', margin: '20px 30px', color: 'orange', fontFamily: 'Comic Sans MS'
              }}>Looking for voice artist for your next project?</div>
              <div style={{
                fontSize: '24px', margin: '20px 30px', color: '#87ebb9', fontStyle: 'italic' 
              }}>Let's work together.</div>
              <div style={{
                fontSize: '24px', margin: '20px 30px', color: 'coral', fontFamily: 'cursive'
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
