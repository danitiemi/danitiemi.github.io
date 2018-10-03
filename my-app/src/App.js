import React, { Component } from 'react'
import './styles/App.scss'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background">
          <NavBar />
          <Header />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
