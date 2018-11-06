import React, { Component } from 'react';
import Title from './components/UI/Title'
import Menu from './components/UI/Menu'
import { NewSong, Songs, PlayerControl } from './components/containers'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Menu />
        <NewSong />
        <Songs />
        <PlayerControl />
      </div>
    );
  }
}

export default App;