import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render () {
    return (
      <div className="AppHeader">
        <header className="header-title">LastFM API</header>
      </div>
    )
  } 
}

export default Header;