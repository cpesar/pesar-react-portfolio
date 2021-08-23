import './projects.scss';
// import { useState } from 'react';

// import books from '../../assets/books.png';
// import Dock from '../../assets/docking.png';
// import Pizza from '../../assets/Pizza.png';
// import Shop from '../../assets/Shop';
// import weather from '../../assets/weather.png';

export default function Projects() {
  return (
    <div className='project' id='project'>
      <h1>Portfolio</h1>
        <ul>
          <li className='active'>Featured</li>
          <li>Web App</li>
          <li>Mobile App</li>
          <li>Design</li>
          <li>Mobile</li>
        </ul>
        <div className='container'>
          <div className='item'>
            <img src='public/assets/docking' alt='' />
            <h3>Dock-n-Flock</h3>
          </div>

          <div className='item'>
            <img src='public/assets/books' alt='' />
            <h3>Dock-n-Flock</h3>
          </div>

          <div className='item'>
            <img src='public/assets/Pizza' alt='' />
            <h3>Dock-n-Flock</h3>
          </div>

          <div className='item'>
            <img src='public/assets/Shop' alt='' />
            <h3>Dock-n-Flock</h3>
          </div>

          <div className='item'>
            <img src='public/assets/weather' alt='' />
            <h3>Dock-n-Flock</h3>
          </div>
        </div>
    </div>
  )
}
