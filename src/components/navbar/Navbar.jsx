// import React from 'react'
import './navbar.scss';
import { GitHub, LinkedIn, Email } from '@material-ui/icons';

export default function Navbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar  " + (menuOpen && "active")}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>Pesar</a>
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
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
