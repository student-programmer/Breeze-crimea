import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Work from './components/Works/Work';

function App() {
  return (
    <div className="app-wrapper">
      <Nav/>
      <div className="wrapper">
      <Route path="/home" render={() => <Home/>}/>
      <Route path="/work" render={() => <Work/>}/>
      
      </div>
    </div>
   );
}

export default App;
