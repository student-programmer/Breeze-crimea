import axios from 'axios';
import React  from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.css';
import { Contact, Footer, Header,
    Nav, Work, Catalog, Home, Mounting} from "./components";
import setAirs from './Redux/Actions/airs';


function App() {

  const dispatch = useDispatch();
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      dispatch(setAirs(data.conditioning));
    });
  }, [])
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <div className="wrapper">
      <Route path="/basket" render={() => <Catalog/>}/>
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
// class App extends React.Component {
//   componentDidMount(){
//     axios.get('http://localhost:3000/db.json').then(({data}) =>{
//       this.props.setAirs(data.conditioning)
     
//     });
    
//   }
  
//   render(){
//     return(
//         <div className="app-wrapper">
//           <Header/>
//           <Nav/>
//           <div className="wrapper">
//           <Route path="/basket" render={() => <Catalog items={this.props.items}/>}/>
//           <Route path="/home" render={() => <Home/>}/>
//           <Route path="/catalog" render={() => <Catalog items={this.props.items}/>}/> 
//           <Route path="/work" render={() => <Work/>}/>
//           <Route path="/help" render={() => <Help/>}/>
//           <Route path="/contact" render={() => <Contact/>}/>
//           <Route path="/mounting" render={() => <Mounting/>}/>
//           </div>
//           <Footer/>
//         </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
// return{
//   items:state.airs.items
  
// }

// };
// const mapDispatchToProps = (dispatch) =>{
//   return{
//     setAirs: (items) => dispatch(setAirs(items)),
//     dispatch
//    }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(App);
export default App;
