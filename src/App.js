import React  from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Contact, Footer, Header,
    Nav, Work, Catalog, Home, Mounting, Cart} from "./components";


function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <div className="wrapper">
      <Route path="/basket" render={() => <Cart/>}/>
      <Route path="/home" render={() => <Home/>}/>
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
