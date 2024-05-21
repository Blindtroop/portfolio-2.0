import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import React from 'react';
import MouseFollower from './components/cursor';
import About from './components/About';
import Projects from './components/Projects';


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <MouseFollower/>
    </React.Fragment>
    
  );
}

export default App;
