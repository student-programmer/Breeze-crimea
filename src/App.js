import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Contact, Footer, Header, Help,
    Nav, Work, MountingContainer, Home } from "./components"

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
