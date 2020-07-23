import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Menubar from '../src/components/Menubar';
import Home from '../src/components/Home/Home.jsx';
import AboutMe from './components/Home/AboutMe.jsx';
import Makeup from './components/Home/Makeup.jsx';
import Cooking from './components/Home/Cooking.jsx';
import Romeo from './components/Home/Romeo.jsx';
import Roomdecor from './components/Home/Room.jsx';
import Volleyball from './components/Home/Volleyball.jsx';

import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Menubar />
        <Route exact path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/makeup" component={Makeup} />
        <Route exact path="/cooking" component={Cooking} />
        <Route exact path="/romeo" component={Romeo} />
        <Route exact path="/roomdecor" component={Roomdecor} />
        <Route exact path="/volleyball" component={Volleyball} />
      </Router>  
      <Footer />
    </div>
  );
}

export default App;
