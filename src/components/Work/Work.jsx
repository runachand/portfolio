import React, { useState } from 'react';
import './Work.css';
import leftSwipe from '../../icons/keyboard_double_arrow_left_black_24dp.svg';
import rightSwipe from '../../icons/keyboard_double_arrow_right_black_24dp.svg';
import { youTubeVideoLinks } from '../../constants';

const Work = () => {
  const [videoIndex, setVideoIndex] = useState(0);

  return(
    <div className='workContainer'>
      {(videoIndex !== 0)
        ? <img src={leftSwipe} onClick={() => setVideoIndex(videoIndex - 3)} alt="left"/>
        : <div style={{ width: '10%' }}></div>
      }
      <div className='videoContainer'>
        <div className='videoBox'>
          {videoIndex<youTubeVideoLinks.length && <iframe title='1' src={ youTubeVideoLinks[videoIndex]} allowfullscreen="allowfullscreen" width="100%" height="100%" frameborder="0" />}
        </div>
        <div className='videoBox'>
          {videoIndex+1<youTubeVideoLinks.length && <iframe title='2' src={ youTubeVideoLinks[videoIndex + 1]} allowfullscreen="allowfullscreen" width="100%" height="100%" frameborder="0" />}
        </div>
        <div className='videoBox'>
          {videoIndex+2<youTubeVideoLinks.length && <iframe title='3' src={ youTubeVideoLinks[videoIndex + 2]} allowfullscreen="allowfullscreen" width="100%" height="100%" frameborder="0" />}
        </div>
      </div>
      {(youTubeVideoLinks.length-1 >= videoIndex + 3)
        ? <img src={rightSwipe} onClick={() => setVideoIndex(videoIndex + 3)} alt="right"/>
        : <div style={{ width: '10%' }}></div>
      }
    </div>
  );
}

export default Work;