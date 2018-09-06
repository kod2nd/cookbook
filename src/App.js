import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Body from './component/Body';



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
