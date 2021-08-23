import { BrowserRouter, Route, Switch } from "react-router-dom";


import Navbar from './components/navbar/Navbar';
import Burger from './components/burger/Burger';
// import Footer from './components/footer/Footer';

import Home from './components/home/Home'
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';

import './app.scss';

import { useState } from 'react';


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (

    <BrowserRouter>
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </div>

    <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Intro} path='/intro' />
        <Route component={Projects} path='/projects' />
        <Route component={Resume} path='/resume' />
        <Route component={Contact} path='/contact' />
      </Switch>

    </BrowserRouter>
    
  );
}

export default App;
