import React, { Component } from 'react'
import './styles/App.scss'
import NavBar from './components/NavBar'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background">
          <NavBar />
          <Header />
  
        </div>
      </div>
    );
  }
}

export default App;
