import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import './app.scss';

import { useState } from 'react';
import { set } from 'lodash';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections'>
        <Intro />
        <Portfolio />
        <Resume />
        <Contact />
        
      </div>
    </div>
  );
}

export default App;
