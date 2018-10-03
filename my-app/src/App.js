import React, { Component } from 'react';
import me from './images/me.jpg';
import './styles/App.scss';
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background">
          <NavBar />
          <header className="App-header">
            <img src={me} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
