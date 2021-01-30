import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Contact, Footer, Header, Help,
    Nav, Work, MountingContainer, Home } from "./components"

function App() {
const [airs, setAirs] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/db.json')
    .then((resp) => resp.json())
    .then(json => {
      setAirs(json.conditioning)
    })
    return () => {
      
    }
  }, [])
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <div className="wrapper">
      <Route path="/home" render={() => <Home items={airs}/>}/>
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
