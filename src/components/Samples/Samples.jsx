import React, { useState } from 'react';
import './Samples.css';
import ReactPlayer from "react-player";

// import english
import Eng_DigitalAd_RunaChand from '../../audio/Eng_DigitalAd_RunaChand.wav';
import Eng_KidGameAdv_RunaChand from '../../audio/Eng_KidGameAdv_RunaChand.mp3';
import Eng_KidGameRole_RunaChand from '../../audio/Eng_KidGameRole_RunaChand.wav';
import Eng_SeriousVoice_RunaChand from '../../audio/Eng_SeriousVoice_RunaChand.wav';
import Eng_TVC_Hershey_RunaChand from '../../audio/Eng_TVC_Hershey_RunaChand.mp3';
import Eng_TVC_SlowCalm_RunaChand from '../../audio/Eng_TVC_SlowCalm_RunaChand.mp3';
import English_KidBoy_Conversational from '../../audio/English_KidBoy_Conversational.wav';






// import hindi files
import Hindi_Ad_Licious_RunaChand from '../../audio/Hindi_Ad_Licious_RunaChand.wav';
import Hindi_Doraemon_Nobita_RunaChand from '../../audio/Hindi_Doraemon-Nobita_RunaChand.mp3';
import Hindi_Emotional_RunaChand from '../../audio/Hindi_Emotional_RunaChand.mp3';
import Hindi_KidConversational_RunaChand from '../../audio/Hindi_KidConversational_RunaChand.mp3';
import Hindi_DigitalAd_RunaChand from '../../audio/Hindi_DigitalAd_RunaChand.mp3';
import Hindi_kidVoice_Bobo_RunaChand from '../../audio/Hindi_kidVoice_Bobo_RunaChand.mp3';
import Hindi_TVC_SlowCalm_RunaChand from '../../audio/Hindi_TVC_SlowCalm_RunaChand.mp3';






// import odia files

import Oriya_Commercial_RunaChand from '../../audio/Oriya_Commercial_RunaChand.mp3';
import Oriya_Documentary_RunaChand from '../../audio/Oriya_Documentary_RunaChand.mp3';
import Oriya_Explainer_RunaChand from '../../audio/Oriya_Explainer_RunaChand.mp3';
import Oriya_KidVoiceSample_RunaChand from '../../audio/Oriya_KidVoiceSample_RunaChand.mp3';





const Samples = () => {
  const [currentTab, setCurrentTab] = useState('Hindi');

  const audioFilesHindi = [
    { fileName: Hindi_Ad_Licious_RunaChand, description: "Hindi Ad" },
    { fileName: Hindi_Doraemon_Nobita_RunaChand, description: "Hindi Doraemon Nobita" },
    { fileName: Hindi_Emotional_RunaChand, description: "Hindi Emotional Voice" },
    { fileName: Hindi_KidConversational_RunaChand, description: "Hindi Kid Conversational" },
    { fileName: Hindi_DigitalAd_RunaChand, description: "Hindi Digital Ad" },
    { fileName: Hindi_kidVoice_Bobo_RunaChand, description: "Hindi kid Voice Bobo" },
    { fileName: Hindi_TVC_SlowCalm_RunaChand, description: "Hindi TVC Calm Voice" },
  ]; 
  const audioFilesEnglish = [
    { fileName: Eng_DigitalAd_RunaChand, description: "Eng Digital Ad" },
    { fileName: Eng_KidGameAdv_RunaChand, description: "Eng KidGame Ad" },
    { fileName: Eng_KidGameRole_RunaChand, description: "Eng KidGame Role" },
    { fileName: Eng_SeriousVoice_RunaChand, description: "Eng Promo Serious Voice" },
    { fileName: Eng_TVC_Hershey_RunaChand, description: "Eng TVC Hershey" },
    { fileName: Eng_TVC_SlowCalm_RunaChand, description: "Eng TVC SlowCalm" },
    { fileName: English_KidBoy_Conversational, description: "Eng Kid Conversational" },
   ];
  const audioFilesOdia = [
    { fileName: Oriya_Commercial_RunaChand, description: "Oriya commercial" },
    { fileName: Oriya_Documentary_RunaChand, description: "Oriya Documentary" },
    { fileName: Oriya_Explainer_RunaChand, description: "Oriya Explainer" },
    { fileName: Oriya_KidVoiceSample_RunaChand, description: "Oriya Kid Voice" },
  ];


  return (
    <div className='sampleContainer'>
      <div className='socialMediaButtonGroup'>

        <div className='headerRow' style={{ padding: '15px' }}>
          <div
            className='headerItem'
            style={{ backgroundColor: currentTab === 'Hindi' ? 'purple' : '', color:'white' }}
            onClick={() => { setCurrentTab('Hindi'); window.scrollTo(0, -50)}}
          >
            Hindi
          </div>
          <div
            className='headerItem headerItemMiddle'
            style={{ backgroundColor: currentTab === 'English' ? 'purple' : '', color:'white' }}
            onClick={() => { setCurrentTab('English'); window.scrollTo(0, -50)}}
          >English
          </div>
          <div
            className='headerItem'
            style={{ backgroundColor: currentTab === 'Odia' ? 'purple' : '', color:'white' }}
            onClick={() => { setCurrentTab('Odia'); window.scrollTo(0, -50)}}
          >Odia
          </div>
        </div>

      </div>
      <div className='audioFileContainer'>
        {currentTab === 'Hindi' &&
          audioFilesHindi.map((file, index) => {
            return (
              <>
                <div style={{ textAlign: 'center', fontWeight: 'bolder', color: 'white' }}>{file.description}</div>
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
        {currentTab === 'English' &&
          audioFilesEnglish.map((file, index) => {
            return (
              <>
                <div style={{ textAlign: 'center', fontWeight: 'bolder', color: 'white' }}>{file.description}</div>
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
        {currentTab === 'Odia' &&
          audioFilesOdia.map((file, index) => {
            return (
              <>
                <div style={{ textAlign: 'center', fontWeight: 'bolder', color: 'white' }}>{file.description}</div>
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
    </div>

  );
}

export default Samples;