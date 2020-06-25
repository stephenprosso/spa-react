import React, { Component } from 'react';
import './css/style.css';
class App extends Component {
  render() {
    return (
      <div className="App" >
        Stephen Rosskito "El Taco Mundo"
        <nav>
          <h2 className="logo"><a className="logo-link" href="#">Oscars 2019</a></h2>
          <ul className="nav-menu">
            <li><a className="nav-menu_link" href="#">Home</a></li>
            <li><a className="nav-menu_link" href="#">Actors</a></li>
            <li><a className="nav-menu_link" href="#">Actress</a></li>
            <li><a className="nav-menu_link" href="#">Films</a></li>
          </ul>
        </nav>
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
