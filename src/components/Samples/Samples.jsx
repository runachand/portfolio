import React, { useState } from 'react';
import './Samples.css';
import ReactPlayer from "react-player";

import EngTVCHershey from '../../audio/Eng_TVC_Hershey_RunaChand.mp3';
import Engkidcartoon from '../../audio/Eng_KidAndCartoon_RunaChand.mp3';
import EngkidAdSweetypotamus from '../../audio/Eng_KidAd_SweetyPotamus.mp3';
import EngTVCslow from '../../audio/Eng_TVC_SlowCalm_RunaChand.mp3';
import Enggamerole from '../../audio/Eng_KidGameRole_RunaChand.mp3';
import Enggamead from '../../audio/Eng_KidGameAdv_RunaChand.mp3';
import EngExplainer from '../../audio/Eng_Explainer_RunaChand.mp3';
import HindiTVCFunkyy from '../../audio/Hindi_TVC_Funky_RunaChand.mp3';
import HindiTVCslow from '../../audio/Hindi_TVC_SlowCalm_RunaChand.mp3';
import Hindikidcartoon from '../../audio/Hindi_KidAndCartoon_RunaChand.mp3';
import HindiVoiceassistant from '../../audio/Hindi_VoiceAssistant_RunaChand.mp3';
import Hindiemotional from '../../audio/Hindi_Emotional_RunaChand.mp3';
import Oriyacommercial from '../../audio/Oriya_Commercial_RunaChand.mp3';
import OriyaExplainer from '../../audio/Oriya_Explainer_RunaChand.mp3';
import OriyaDocumentary from '../../audio/Oriya_Documentary_RunaChand.mp3';
import OriyaKidvoice from '../../audio/Oriya_KidVoiceSample_RunaChand.mp3';
import OriyaIVR from '../../audio/Oriya_IVR_RunaChand.mp3';
import OriyaSM from '../../audio/OriyaSM_Voice+BGM.mp3';

const Samples = () => {
  const [currentTab, setCurrentTab] = useState('Hindi');

  const audioFilesHindi = [
    { fileName: HindiTVCFunkyy, description: "Hindi TVC casual" },
    { fileName: HindiTVCslow, description: "Hindi TVC calm" },
    { fileName: Hindikidcartoon, description: "Hindi Kid Cartoon" },
    { fileName: HindiVoiceassistant, description: "Hindi Voice Assistant" },
    { fileName: Hindiemotional, description: "Hindi Poetry Emotional" },
  ];
  const audioFilesEnglish = [
    { fileName: EngTVCHershey, description: "Eng TVC Hershey" },
    { fileName: Engkidcartoon, description: "Eng Kid Cartoon" },
    { fileName: EngkidAdSweetypotamus, description: "Eng Kid Ad Cartoon" },
    { fileName: EngTVCslow, description: "Eng TVC Calm" },
    { fileName: Enggamerole, description: "Eng Kid Game role" },
    { fileName: Enggamead, description: "Eng Game Ad" },
    { fileName: EngExplainer, description: "Eng Explainer" },
  ];
  const audioFilesOdia = [
    { fileName: Oriyacommercial, description: "Oriya commercial" },
    { fileName: OriyaExplainer, description: "Oriya Explainer" },
    { fileName: OriyaDocumentary, description: "Oriya Documentary" },
    { fileName: OriyaKidvoice, description: "Oriya Kid voice" },
    { fileName: OriyaIVR, description: "Oriya IVR" },
    { fileName: OriyaSM, description: "Oriya Short Movie" },
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