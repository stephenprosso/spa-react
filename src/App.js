import React, { Component } from 'react';

import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';

import Artists from './components/Artists';
import Events from './components/Events';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* Stephen Rosskito "El Taco Mundo" */}
         <Navbar title="Crssd Fest Artists" />
         <Route exact path="/" render={() => <Home title="Resident Artists"/>}/>
        
         <Route path="/Artists" render={() => <Artists title="Featured Artists"/>}/>
         <Route path="/Events" render={() => <Events title="Events"/>}/>
         {/* route WITHOUT passing props */}
         {/* <Route to="/" component={Home}/> */}
         {/* <Route to="/Djs" component={Djs}/>}/> */}
        </div>
      </BrowserRouter>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//      Stephen Rosskito
//      <nav>
//        <h2>Oscars 2019</h2>
//        <ul>
//          <li>Home</li>
//          <li>Actors</li>
//          <li>Actress</li>
//          <li>Films</li>
//        </ul>
//      </nav>
//     </div>
//   );
// }

export default App;
