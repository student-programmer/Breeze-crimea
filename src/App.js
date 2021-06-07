import React, { useEffect }  from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Contact, Footer, Header,
    Nav, Work, Catalog, Home, Mounting, Cart} from "./components";

import "./reset.css"
import "./asseds/fonts/stylesheet.css"
import { useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <div className="wrapper">
      <Route path="/basket" render={() => <Cart/>}/>
      <Route path="/home"  render={() => <Home/>}/>
      <Route path="/catalog" render={() => <Catalog />}/> 
      <Route path="/work" render={() => <Work/>}/>
      <Route path="/contact" render={() => <Contact/>}/>
      <Route path="/mounting" render={() => <Mounting/>}/>
      </div>
      <Footer/>
    </div>
   );
}
export default App;
