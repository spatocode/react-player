import React, { Component } from 'react';
import Title from './components/Title'
import Menu from './components/Menu'
import { NewSong, Songs } from './containers'
import CurrentPlayer from './components/CurrentPlayer'
import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Menu />
        <NewSong />
        <Songs />
        <CurrentPlayer />
      </div>
    );
  }
}

export default App;