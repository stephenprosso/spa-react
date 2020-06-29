import React, { Component } from 'react';

import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Djs from './components/Djs';
import Artists from './components/Djs';
import Events from './components/Events';
import Technodjs from './components/Technodjs';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* Stephen Rosskito "El Taco Mundo" */}
         <Navbar title="Crssd Fest Artists" />
         <Route exact path="/" render={() => <Home title="Resident Artists"/>}/>
         <Route path="/Djs" render={() => <Djs title="Artists"/>}/>
         <Route path="/Artists" render={() => <Artists title="Featured Artists"/>}/>
         <Route path="/Events" render={() => <Events title="Events"/>}/>
         <Route path="/Technodjs" render={() => <Technodjs title="Techno DJs"/>}/>
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
