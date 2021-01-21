import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Help from './components/Help/Help';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Work from './components/Works/Work';
import Footer from './components/Footer/Footer';
import Mounting from './components/Mounting/Mounting';
import MountingContainer from './components/Mounting/MountingContainer';


function App(props) {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <div className="wrapper">
      <Route path="/home" render={() => <Home/>}/>
      <Route path="/work" render={() => <Work/>}/>
      <Route path="/help" render={() => <Help/>}/>
      <Route path="/contact" render={() => <Contact/>}/>
      <Route path="/mounting" render={() => <MountingContainer/>}/>
      </div>
      <Footer/>
    </div>
   );
}

export default App;
