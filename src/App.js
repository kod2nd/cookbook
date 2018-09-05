import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Body from './component/Body';

class App extends Component {
  render() {
    const API_KEY = process.env.REACT_APP_FORK_2_FORK_API_KEY
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
