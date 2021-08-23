
import './intro.scss';
import { KeyboardArrowDown } from '@material-ui/icons';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Web Developer', 'Learner', 'Snowboarder', 'Human'],
    });
  },[]);

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/goggles.jpeg' alt='goggles'></img>
        </div>
      </div>

      <div className='right'>
        <div className='wrapper'>
          <h2>Hello I'm </h2>
          <h1>Chris Pesar</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <span className='arrow'>
          <KeyboardArrowDown /> 
          </span>
        </a>
      </div>
    </div>
  )
}