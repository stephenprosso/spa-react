import React, { Component } from 'react';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import ArtistContainer from './components/ArtistContainer';
import Events from './components/Events';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* Stephen Rosskito "El Taco Mundo" */}
         <Navbar title="Crssd Fest Artists" />
         <Route exact path="/" render={() => <Home title="CRSSD FEST This site is not affiliated with FNGRS CRSSD"/>}/>
         <Route path="/Artists" render={() => <ArtistContainer title="Previous Artists"/>}/>
         <Route path="/Events" render={() => <Events title="Events"/>}/>
         {/* route WITHOUT passing props */}
         {/* <Route to="/" component={Home}/> */}
         {/* <Route to="/Djs" component={Djs}/>}/> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
