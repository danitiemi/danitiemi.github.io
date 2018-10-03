import React, { Component } from 'react';

class NavBar extends Component {
  
  render() {
    return (
      <div class="main-nav">    
        <ul class="nav">
            <li><i class="fas fa-laptop-code"></i><a href="https://github.com/danitiemi" target="_blank" rel="noopener noreferrer"> Projects</a></li>
            <li><i class="far fa-file-code"></i><a href="https://resume.creddle.io/resume/irnesg6czb4" target="_blank"rel="noopener noreferrer"> Resume</a></li>
            <li><i class="far fa-id-card"></i><a href="mailto:danitiemi.br@gmail.com"> Contact</a></li>
        </ul>     
      </div>
    )
  }

}

export default NavBar;