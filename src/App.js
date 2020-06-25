import React, { Component } from 'react';
import './css/style.css';
class App extends Component {
  render() {
    return (
      <div className="App" >
        Stephen Rosskito
        <nav>
          <h2 class="logo">Oscars 2019</h2>
          <ul class="nav-menu">
            <li>Home</li>
            <li>Actors</li>
            <li>Actress</li>
            <li>Films</li>
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
