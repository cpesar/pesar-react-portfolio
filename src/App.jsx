//Components
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Burger from './components/burger/Burger';
import Footer from './components/footer/Footer';

//Pages
import Portfolio from './pages/portfolio/Portfolio';
import Resume from './pages/resume/Resume';
import Contact from './pages/contact/Contact';

import './app.scss';

import { useState } from 'react';


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
        <Intro />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
