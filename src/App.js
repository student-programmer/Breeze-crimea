import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Contact, Footer, Header, Help,
    Nav, Work, Catalog, Home, Mounting} from "./components";


function App() {
const [airs, setAirs] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) =>{
      setAirs(data.conditioning)
    });
  }, [])
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <div className="wrapper">
      <Route path="/basket" render={() => <Catalog items={airs}/>}/>
      <Route path="/home" render={() => <Home/>}/>
      <Route path="/catalog" render={() => <Catalog items={airs}/>}/> 
      <Route path="/work" render={() => <Work/>}/>
      <Route path="/help" render={() => <Help/>}/>
      <Route path="/contact" render={() => <Contact/>}/>
      <Route path="/mounting" render={() => <Mounting/>}/>
      </div>
      <Footer/>
    </div>
   );
}

export default App;
