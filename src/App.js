import React, { Component } from 'react';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/Home';
class App extends Component {
  render() {
    return (
      <div className="App" >
        Stephen Rosskito "El Taco Mundo"
        <Navbar title="Oscars Bitches!!"/>
        <Home title="WiNnErS!"/>
      </div>
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
