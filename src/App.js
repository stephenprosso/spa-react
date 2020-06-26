import React, { Component } from 'react';

import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Djs from './components/Djs';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          Stephen Rosskito "El Taco Mundo"
         <Navbar title="Fngrs Crssd DJs" />
         <Route to="/Djs" render={() => <Djs title="DJS"/>}/>
         {/* route WITHOUT passing props */}
         {/* <Route to="/" component={Home}/> */}
         {/* route passing props */}
         <Route to="/" render={() => <Home title="Top Dawgs"/>}/>
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
