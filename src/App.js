import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhotoCollection from './PhotoCollection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PhotoCollection />
      </div>
    );
  }
}

export default App;
