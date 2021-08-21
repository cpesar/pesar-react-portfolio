
import './intro.scss';
import { KeyboardArrowDown } from '@material-ui/icons';

export default function Intro() {
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
          <h3>Web Developer<span></span></h3>
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
