import React, { Component } from 'react';
import AppLayout from '../src/components/AppLayout';
import logo from './logo.svg';
import './App.css';
import './firebase/firebase';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppLayout />
      </div>
    );
  }
}

export default App;
