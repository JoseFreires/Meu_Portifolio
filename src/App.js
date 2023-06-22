import React from 'react';

import Footer from './components/footer';
import Principal from './components/principal';
import MyPersonality from './components/mypersonality';
import MyDev from './components/mydev';
import MyProjects from './components/myprojects';

import './App.css';



function App() {
  return (
    <div className="App">
      
      <Principal />
      <MyPersonality />
      <MyDev />
      <MyProjects />
      <Footer />
    </div>
  );
}

export default App;
