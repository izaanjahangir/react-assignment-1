import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Component1 from './components/Component1/Component1';
import Component2 from './components/Component2/Component2';
import Component3 from './components/Component3/Component3';
import TestComponent from './components/TestComponent/TestComponent';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Header />
        <div className="container">
          <Component1 />
          <Component2 />  
          <Component3 />                            
        </div>
      </div>
    );
  }
}

export default App;
