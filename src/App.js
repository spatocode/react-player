import React, { Component } from 'react';
import Title from './components/Title'
import Menu from './components/Menu'
import { NewSong, Songs, PlayerControl } from './containers'
import './stylesheets/App.css';

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