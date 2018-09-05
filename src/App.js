import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Body from './component/Body';
const API_KEY = process.env.REACT_APP_FORK_2_FORK_API_KEY


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="header"/>
        <Body className="body"/>
      </div>
    );
  }
}

export default App;
