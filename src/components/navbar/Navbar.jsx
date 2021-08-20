// import React from 'react'
import './navbar.scss';
import { GitHub, LinkedIn, Email } from '@material-ui/icons';

export default function Navbar() {
  return (
    <div className='navbar active'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>geuius.</a>
          <div className='itemContainer'>
            <GitHub className="icon"/>
            <span>cpesar</span>
          </div>

          <div className='itemContainer'>
            <LinkedIn className="icon" />
            <span>chrispesar1@gmail.com</span>
          </div>

          <div className='itemContainer'>
            <Email className="icon" />
            <span>chrispesar1@gmail.com</span>
          </div>
          
         
        </div>
        <div className='right'>
          <div className='hamburger'>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
