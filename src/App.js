import './App.css';
import React from 'react';
import Header from './Header'
import Buttons from "./Buttons";
import Info from "./Info";

function App() {
  return (
    <div className="App">
      <Header/>
      <Buttons/>
      <Info/>
    </div>
  );
}

export default App;
