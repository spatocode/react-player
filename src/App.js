import React, { Component } from 'react';
import Title from './components/Title'
import Menu from './components/Menu'
import PlayerList from './components/PlayerList'
import CurrentPlayer from './components/CurrentPlayer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title/>
        <Menu/>
        <PlayerList/>
        <CurrentPlayer/>
      </div>
    );
  }
}

export default App;