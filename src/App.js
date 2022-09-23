import './App.css';
import React from 'react';
import Header from './Header'
import Buttons from "./Buttons";
import Info from "./Info";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Buttons/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
